/** @jsxImportSource react */
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

type ConfirmationCodeProps = {
  verificationLink: string;
};

export default function ConfirmationCode({
  verificationLink,
}: ConfirmationCodeProps): React.ReactElement {
  return (
    <Html>
      <Head>
        <title>Verify your email address</title>
      </Head>
      <Preview>Welcome to Genii! Please verify your email address</Preview>
      <Tailwind>
        <Body style={{ fontFamily: "sans-serif", background: "#f4f4f5" }}>
          <Container style={{ padding: "40px 20px" }}>
            <Container
              style={{
                background: "white",
                padding: "40px 24px",
                borderRadius: "12px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Heading
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  marginBottom: "16px",
                  color: "#18181b",
                }}
              >
                Welcome to Genii! 🎉
              </Heading>
              <Text className="text-lg text-gray-600" style={{ lineHeight: "1.6" }}>
                Thank you for joining us! To get started, please verify your email address by
                clicking the button below.
              </Text>

              <Section className="my-10 text-center">
                <Button
                  href={verificationLink}
                  className="rounded-lg bg-blue-600 px-8 py-4 text-center text-lg font-semibold text-white hover:bg-blue-700 transition-colors"
                  style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
                >
                  Verify Email Address
                </Button>
              </Section>

              <Text className="text-sm text-gray-500">
                If the button above doesn&apos;t work, you can also click this link:{" "}
                <Link
                  href={verificationLink}
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  {verificationLink}
                </Link>
              </Text>

              <Text className="mt-8 text-sm text-gray-400 text-center">
                If you didn&apos;t create an account with us, you can safely ignore this email.
              </Text>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

ConfirmationCode.PreviewProps = {
  verificationLink: "https://example.com/verify?code=424-242",
} as ConfirmationCodeProps;
