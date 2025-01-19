import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Text,
} from "@react-email/components";
import { createTranslator } from "next-intl";

import * as en from "@/public/locales/en.json";

export const ExampleEmail = (props?: {
  t: ReturnType<typeof createTranslator>;
}) => {
  const t =
    props?.t ??
    createTranslator({
      locale: "en",
      messages: en,
    });

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={box}>
            <Text style={paragraph}>{t("Metadata.Title")}</Text>
            <Hr />
            <Text style={paragraph}>{t("Metadata.Description")}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ExampleEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};
