import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "landing-layout"
declare module "C:/api/soran-project/gsap/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}