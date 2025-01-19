"use client";

import { Button } from "@/lib/client/components/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/lib/client/components/Form";
import { Input } from "@/lib/client/components/Input";
import { Page } from "@/lib/client/components/Page";
import { LoginForm, loginFormSchema } from "@/lib/common/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

export default function FormExamplePage() {
  const t = useTranslations();

  const form = useForm<LoginForm>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const printFormValues = (values: LoginForm) => {
    alert(`form submitted with the following values:
email: ${values.email}
password: ${values.password}
`);
  };

  return (
    <Page showBackButton>
      <h1 className="text-xl font-bold mb-3">{t("FormExample.PageTitle")}</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(printFormValues)}
          className="flex flex-col gap-4 w-[400px] border p-6 rounded-lg"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button variant="secondary" className="self-end">
            Submit
          </Button>
        </form>
      </Form>
    </Page>
  );
}
