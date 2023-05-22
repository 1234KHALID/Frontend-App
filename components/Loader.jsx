import {
  LegacyCard,
  Layout,
  SkeletonPage,
  SkeletonBodyText,
} from "@shopify/polaris";

export const Loader = () => {
  return (
    <>
      <SkeletonPage>
        <Layout>
          <Layout.Section>
            <LegacyCard sectioned>
              <SkeletonBodyText />
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </SkeletonPage>
    </>
  )
}

