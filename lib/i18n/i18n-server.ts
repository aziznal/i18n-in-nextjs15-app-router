import i18next from "i18next";
import I18NexFsBackend from "i18next-fs-backend";
import { FsBackendOptions } from "i18next-fs-backend";

i18next.use(I18NexFsBackend).init<FsBackendOptions>({
  lng: "en",
  fallbackLng: "en",

  backend: {
    loadPath: "public/locales/{{lng}}.json",
  },
});
