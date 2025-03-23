"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QuizQuestion, QuizOption } from "../types";
import { Label } from "@genii/ui/components/label";
import { CheckIcon, XIcon } from "lucide-react";

// Temporary implementation of Checkbox until proper component is available
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  id: string;
  disabled?: boolean;
  className?: string;
}

function Checkbox({ checked, onCheckedChange, id, disabled, className, ...props }: CheckboxProps) {
  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={(e) => onCheckedChange(e.target.checked)}
      disabled={disabled}
      className={`h-4 w-4 rounded border-border text-primary focus:ring-primary ${className}`}
      {...props}
    />
  );
}

// Temporary implementation of RadioGroup until proper component is available
interface RadioGroupProps {
  value: string;
  onValueChange: (value: string) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

function RadioGroup({ value, onValueChange, disabled, children }: RadioGroupProps) {
  return <div className="space-y-2">{children}</div>;
}

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  id: string;
  disabled?: boolean;
  className?: string;
}

function RadioGroupItem({ value, id, disabled, className, ...props }: RadioGroupItemProps) {
  // Connect to parent RadioGroup through explicit props
  const parentValue = props.form; // We'll use the form prop to pass the selected value
  const parentOnChange = props.onClick as unknown as (value: string) => void;

  return (
    <input
      type="radio"
      id={id}
      value={value}
      checked={value === parentValue}
      onChange={() => parentOnChange?.(value)}
      disabled={disabled}
      className={`h-4 w-4 border-border text-primary focus:ring-primary ${className}`}
      {...props}
    />
  );
}

interface AnswerOptionsProps {
  question: QuizQuestion;
  selectedAnswers: string[];
  isUnsure: boolean;
  showFeedback: boolean;
  disabled: boolean;
  setSelectedAnswers: (answers: string[]) => void;
  setIsUnsure: (isUnsure: boolean) => void;
}

export function AnswerOptions({
  question,
  selectedAnswers,
  isUnsure,
  showFeedback,
  disabled,
  setSelectedAnswers,
  setIsUnsure,
}: AnswerOptionsProps) {
  const handleSingleSelect = (optionId: string) => {
    setSelectedAnswers([optionId]);
  };

  const handleMultipleSelect = (optionId: string, checked: boolean) => {
    if (checked) {
      setSelectedAnswers([...selectedAnswers, optionId]);
    } else {
      setSelectedAnswers(selectedAnswers.filter((id) => id !== optionId));
    }
  };

  // This or That Option (Single select with two options, styled differently)
  if (question.type === "thisOrThat") {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {question.options.map((option) => {
            const isSelected = selectedAnswers.includes(option.id);
            const isCorrect = question.correctAnswers.includes(option.id);

            // Style classes for This or That options
            let optionClasses =
              "flex flex-col items-center p-4 rounded-xl cursor-pointer border-2 transition-all";

            if (disabled) {
              optionClasses += " cursor-not-allowed";
            }

            if (isSelected) {
              optionClasses += " border-primary";
            } else {
              optionClasses += " border-border hover:border-primary/50";
            }

            // Add feedback styles
            if (showFeedback) {
              if (isSelected && isCorrect) {
                optionClasses += " bg-green-50 border-green-500";
              } else if (isSelected && !isCorrect) {
                optionClasses += " bg-red-50 border-red-500";
              } else if (!isSelected && isCorrect) {
                optionClasses += " bg-green-50 border-green-500";
              }
            }

            return (
              <div
                key={option.id}
                className={optionClasses}
                onClick={() => !disabled && handleSingleSelect(option.id)}
              >
                {option.image && (
                  <div className="mb-3 rounded overflow-hidden">
                    <Image
                      src={option.image}
                      alt={option.text}
                      width={200}
                      height={150}
                      className="w-full h-auto max-h-[150px] object-contain"
                    />
                  </div>
                )}

                <span className="text-lg font-medium">{option.text}</span>

                {/* Feedback indicators */}
                {showFeedback && (
                  <div className="absolute top-2 right-2">
                    {isCorrect ? (
                      <CheckIcon className="text-green-500 h-6 w-6" />
                    ) : (
                      isSelected && <XIcon className="text-red-500 h-6 w-6" />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* I'm not sure checkbox */}
        <div className="flex items-center mt-4">
          <Checkbox
            id="unsure-checkbox-this-that"
            checked={isUnsure}
            onCheckedChange={(checked: boolean) => setIsUnsure(checked)}
            disabled={disabled}
            className="mr-2"
          />
          <Label
            htmlFor="unsure-checkbox-this-that"
            className="text-muted-foreground cursor-pointer"
          >
            I'm not sure
          </Label>
        </div>
      </div>
    );
  }

  // Multiple Choice (Single select)
  if (question.type === "single") {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          {question.options.map((option) => {
            const isSelected = selectedAnswers.includes(option.id);
            const isCorrect = question.correctAnswers.includes(option.id);

            // Style classes for radio items container
            let containerClasses =
              "flex items-start space-x-3 p-3 rounded-lg border transition-all";

            if (isSelected && !showFeedback) {
              containerClasses += " border-primary bg-primary/5";
            } else {
              containerClasses += " border-border";
            }

            // Add feedback styles
            if (showFeedback) {
              if (isSelected && isCorrect) {
                containerClasses += " bg-green-50 border-green-500";
              } else if (isSelected && !isCorrect) {
                containerClasses += " bg-red-50 border-red-500";
              } else if (!isSelected && isCorrect) {
                containerClasses += " bg-green-50 border-green-500";
              }
            }

            return (
              <div key={option.id} className={containerClasses}>
                <input
                  type="radio"
                  id={option.id}
                  value={option.id}
                  checked={isSelected}
                  onChange={() => handleSingleSelect(option.id)}
                  disabled={disabled}
                  className="h-4 w-4 border-border text-primary focus:ring-primary mt-1"
                />

                <div className="flex-1">
                  <Label
                    htmlFor={option.id}
                    className={`font-normal ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div>{option.text}</div>

                    {option.image && (
                      <div className="mt-2 rounded overflow-hidden">
                        <Image
                          src={option.image}
                          alt={option.text}
                          width={400}
                          height={200}
                          className="max-h-[200px] object-contain"
                        />
                      </div>
                    )}
                  </Label>
                </div>

                {/* Feedback indicators */}
                {showFeedback && (
                  <div className="ml-2">
                    {isCorrect ? (
                      <CheckIcon className="text-green-500 h-5 w-5" />
                    ) : (
                      isSelected && <XIcon className="text-red-500 h-5 w-5" />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* I'm not sure checkbox */}
        <div className="flex items-center mt-4">
          <Checkbox
            id="unsure-checkbox-single"
            checked={isUnsure}
            onCheckedChange={(checked: boolean) => setIsUnsure(checked)}
            disabled={disabled}
            className="mr-2"
          />
          <Label htmlFor="unsure-checkbox-single" className="text-muted-foreground cursor-pointer">
            I'm not sure
          </Label>
        </div>
      </div>
    );
  }

  // Multiple Selection (Multiple select)
  return (
    <div className="space-y-4">
      {question.options.map((option) => {
        const isSelected = selectedAnswers.includes(option.id);
        const isCorrect = question.correctAnswers.includes(option.id);

        // Style classes for checkbox items container
        let containerClasses = "flex items-start space-x-3 p-3 rounded-lg border transition-all";

        if (isSelected && !showFeedback) {
          containerClasses += " border-primary bg-primary/5";
        } else {
          containerClasses += " border-border";
        }

        // Add feedback styles
        if (showFeedback) {
          // For multiple selection, correctness is more complex:
          // If selected and in correctAnswers -> correct
          // If selected and not in correctAnswers -> incorrect
          // If not selected and in correctAnswers -> incorrect
          // If not selected and not in correctAnswers -> correct
          if (isSelected && isCorrect) {
            containerClasses += " bg-green-50 border-green-500";
          } else if (isSelected && !isCorrect) {
            containerClasses += " bg-red-50 border-red-500";
          } else if (!isSelected && isCorrect) {
            containerClasses += " bg-green-50 border-green-500";
          }
        }

        return (
          <div key={option.id} className={containerClasses}>
            <Checkbox
              id={option.id}
              checked={isSelected}
              onCheckedChange={(checked: boolean) => handleMultipleSelect(option.id, checked)}
              disabled={disabled}
              className="mt-1"
            />

            <div className="flex-1">
              <Label
                htmlFor={option.id}
                className={`font-normal ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
              >
                <div>{option.text}</div>

                {option.image && (
                  <div className="mt-2 rounded overflow-hidden">
                    <Image
                      src={option.image}
                      alt={option.text}
                      width={400}
                      height={200}
                      className="max-h-[200px] object-contain"
                    />
                  </div>
                )}
              </Label>
            </div>

            {/* Feedback indicators */}
            {showFeedback && (
              <div className="ml-2">
                {isCorrect ? (
                  <CheckIcon className="text-green-500 h-5 w-5" />
                ) : (
                  isSelected && <XIcon className="text-red-500 h-5 w-5" />
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* I'm not sure checkbox */}
      <div className="flex items-center mt-4">
        <Checkbox
          id="unsure-checkbox-multiple"
          checked={isUnsure}
          onCheckedChange={(checked: boolean) => setIsUnsure(checked)}
          disabled={disabled}
          className="mr-2"
        />
        <Label htmlFor="unsure-checkbox-multiple" className="text-muted-foreground cursor-pointer">
          I'm not sure
        </Label>
      </div>
    </div>
  );
}
