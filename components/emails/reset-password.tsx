import * as React from 'react';
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
  Text,
  Tailwind,
} from '@react-email/components';

interface ForgotPasswordEmailProps {
  username?: string;
  userEmail?: string;
  resetUrl?: string;
}

const ForgotPasswordEmail = (props: ForgotPasswordEmailProps) => {
  const { userEmail , resetUrl,username } = props;

  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Preview>Reset your password - Action required</Preview>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto">
            {/* Header */}
            <Section className="bg-blue-600 rounded-t-[8px] px-[40px] py-[32px]">
              <Heading className="text-white text-[28px] font-bold m-0 text-center">
                Password Reset Request
              </Heading>
            </Section>

            {/* Main Content */}
            <Section className="px-[40px] py-[32px]">
              <Text className="text-gray-700 text-[16px] leading-[24px] m-0 mb-[16px]">
                Hello {username},
              </Text>
              
              <Text className="text-gray-700 text-[16px] leading-[24px] m-0 mb-[24px]">
                We received a request to reset the password for your account associated with <strong>{userEmail}</strong>.
              </Text>

              <Text className="text-gray-700 text-[16px] leading-[24px] m-0 mb-[32px]">
                If you made this request, click the button below to reset your password:
              </Text>

              {/* Reset Button */}
              <Section className="text-center mb-[32px]">
                <Button
                  href={resetUrl}
                  className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block"
                >
                  Reset Password
                </Button>
              </Section>

              <Text className="text-gray-600 text-[14px] leading-[20px] m-0 mb-[16px]">
                This link will expire in 24 hours for security reasons.
              </Text>

              <Text className="text-gray-600 text-[14px] leading-[20px] m-0 mb-[24px]">
                If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged.
              </Text>

              <Text className="text-gray-700 text-[16px] leading-[24px] m-0 mb-[8px]">
                Best regards,
              </Text>
              <Text className="text-gray-700 text-[16px] leading-[24px] m-0 font-semibold">
                The Security Team
              </Text>
            </Section>

            {/* Footer */}
            <Section className="bg-gray-50 px-[40px] py-[24px] rounded-b-[8px] border-t border-solid border-gray-200">
              <Text className="text-gray-500 text-[12px] leading-[16px] m-0 mb-[8px]">
                If you're having trouble clicking the button, copy and paste the URL below into your web browser:
              </Text>
              <Link href={resetUrl} className="text-blue-600 text-[12px] break-all">
                {resetUrl}
              </Link>
              
              <Text className="text-gray-500 text-[12px] leading-[16px] m-0 mt-[16px] mb-[8px]">
                This email was sent to {userEmail}
              </Text>
              <Text className="text-gray-500 text-[12px] leading-[16px] m-0">
                © 2025 Your Company Name. All rights reserved.
              </Text>
              <Text className="text-gray-500 text-[12px] leading-[16px] m-0">
                123 Business Street, City, State 12345
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};



export default ForgotPasswordEmail;