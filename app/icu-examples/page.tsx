import { Page } from "@/lib/client/components/Page";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function ClientExamplePage() {
  const t = useTranslations();

  return (
    <Page showBackButton showBorder>
      <h1 className="text-3xl font-bold mb-3">{t("ICUExamples.PageTitle")}</h1>

      <p className="mb-4">
        {t.rich("ICUExamples.ICUDescription.Paragraph1", {
          strong: (chunks) => <span className="font-bold">{chunks}</span>,
        })}
      </p>

      <p className="mb-4">{t("ICUExamples.ICUDescription.Paragraph2")}</p>

      <p className="mb-4">{t("ICUExamples.ICUDescription.Paragraph3")}</p>

      <hr className="mb-4" />

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-3">
          {t("ICUExamples.ObjectCountExamples.SectionTitle")}
        </h2>

        <p>{t("ICUExamples.ObjectCountExamples.CartItems", { count: 0 })}</p>

        <p>{t("ICUExamples.ObjectCountExamples.CartItems", { count: 1 })}</p>

        <p>{t("ICUExamples.ObjectCountExamples.CartItems", { count: 2 })}</p>

        <p>{t("ICUExamples.ObjectCountExamples.CartItems", { count: 3 })}</p>
      </section>

      <hr className="mb-4" />

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-3">
          {t("ICUExamples.NumberExamples.SectionTitle")}
        </h2>

        <span>{t("ICUExamples.NumberExamples.NumberNormal.ExampleLabel")}</span>

        <p className="mb-4">
          {t("ICUExamples.NumberExamples.NumberNormal.Number", {
            inputNumber: 1000000000.123456,
          })}
        </p>

        <span>
          {t("ICUExamples.NumberExamples.NumberPercentage.ExampleLabel")}
        </span>

        <p className="mb-4">
          {t("ICUExamples.NumberExamples.NumberPercentage.Number", {
            inputNumber: 0.6942,
          })}
        </p>

        <span>
          {t("ICUExamples.NumberExamples.NumberMeasurement.ExampleLabel")}
        </span>

        <p className="mb-4">
          {t("ICUExamples.NumberExamples.NumberMeasurement.Number", {
            inputNumber: 5000,
          })}
        </p>

        <span>
          {t("ICUExamples.NumberExamples.NumberCurrency.ExampleLabel")}
        </span>

        <p className="mb-4">
          {t(
            "ICUExamples.NumberExamples.NumberCurrency.Number",
            { inputNumber: 32000.99 },
            {
              number: {
                currency: {
                  style: "currency",
                },
              },
            },
          )}
        </p>

        <span>
          {t("ICUExamples.NumberExamples.NumberScientific.ExampleLabel")}
        </span>

        <p className="mb-4">
          {t("ICUExamples.NumberExamples.NumberScientific.Number", {
            inputNumber: 5000000000000,
          })}
        </p>

        <p>
          {t.rich("ICUExamples.NumberExamples.MoreSkeletonsLink", {
            link: (chunks) => (
              <Link
                href="https://unicode-org.github.io/icu/userguide/format_parse/numbers/skeletons.html#notation"
                className="underline"
                target="_blank"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
      </section>

      <hr className="mb-4" />

      <section className="mb-4">
        <h2 className="text-xl font-bold mb-3">Gender examples</h2>

        <div className="flex gap-6 flex-wrap">
          <div>
            <p>
              {t("ICUExamples.GenderExamples.ThereAreStudents", {
                gender: "male",
                count: 1,
              })}
            </p>

            <p>
              {t("ICUExamples.GenderExamples.ThereAreStudents", {
                gender: "male",
                count: 2,
              })}
            </p>

            <p className="mb-2">
              {t("ICUExamples.GenderExamples.ThereAreStudents", {
                gender: "male",
                count: 3,
              })}
            </p>
          </div>

          <div>
            <p>
              {t("ICUExamples.GenderExamples.ThereAreStudents", {
                gender: "female",
                count: 1,
              })}
            </p>

            <p>
              {t("ICUExamples.GenderExamples.ThereAreStudents", {
                gender: "female",
                count: 2,
              })}
            </p>

            <p className="mb-2">
              {t("ICUExamples.GenderExamples.ThereAreStudents", {
                gender: "female",
                count: 3,
              })}
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
}
