import { Page } from "@/lib/client/components/Page";
import { useTranslations } from "next-intl";

export default function ClientExamplePage() {
  const t = useTranslations();

  return (
    <Page showBackButton showBorder>
      <h1 className="text-3xl font-bold mb-3">The ICU Format</h1>

      <p className="mb-4">
        The{" "}
        <span className="font-bold">
          {" "}
          ICU (International Components for Unicode){" "}
        </span>
        format is a way of handling different linguistic and cultural needs for
        a given localization.
      </p>

      <p className="mb-4">
        Across different cultures, things like count of objects, numbers (i.e.
        money), gender, and dates can cause a sentence structure to change in a
        unique way to that language.
      </p>

      <p className="mb-4">
        Additionally, you may have a dynamic value used in your localization,
        which would need to be handled differently based on different languages'
        grammar, etc.
      </p>

      <hr className="mb-4" />

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-3">Object Count Examples</h2>

        <p>You have no items in your cart</p>
        <p>You have 1 item in your cart</p>
        <p>You have 2 items in your cart</p>
        <p>You have 3 items in your cart</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-3">Number examples</h2>
        <p>1000000000</p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-3">Gender examples</h2>

        <div className="flex gap-6 flex-wrap">
          <div>
            <p>There is 1 student (male)</p>
            <p>There are 2 students (male)</p>
            <p className="mb-2">There are 3 students (male)</p>
          </div>

          <div>
            <p>There is 1 student (female)</p>
            <p>There are 2 students (female)</p>
            <p>There are 3 students (female)</p>
          </div>
        </div>
      </section>
    </Page>
  );
}
