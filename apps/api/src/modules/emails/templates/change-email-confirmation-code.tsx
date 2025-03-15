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

type ChangeEmailConfirmationCodeProps = {
  verificationLink: string;
};

export default function ChangeEmailConfirmationCode({
  verificationLink,
}: ChangeEmailConfirmationCodeProps): React.ReactElement {
  return (
    <Html>
      <Head>
        <title>Confirm your email change</title>
      </Head>
      <Preview>Confirm your email change request for Genii</Preview>
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
                Confirm Email Change 📧
              </Heading>
              <Text className="text-lg text-gray-600" style={{ lineHeight: "1.6" }}>
                We received a request to change your email address. To confirm this change, please
                click the button below.
              </Text>

              <Section className="my-10 text-center">
                <Button
                  href={verificationLink}
                  className="rounded-lg bg-blue-600 px-8 py-4 text-center text-lg font-semibold text-white transition-colors hover:bg-blue-700"
                  style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
                >
                  Confirm Email Change
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

              <Text className="mt-8 text-center text-sm text-gray-400">
                If you didn&apos;t request to change your email address, you can safely ignore this
                email. Your account security is important to us.
              </Text>
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

ChangeEmailConfirmationCode.PreviewProps = {
  verificationLink: "https://example.com/change-email?code=424-242",
} as ChangeEmailConfirmationCodeProps;
