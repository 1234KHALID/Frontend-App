import {Modal, Text} from '@shopify/polaris';
export function SplashImgModal({active, handleChange, handleRemoveSplash}) {

  return (
      <Modal
        open={active}
        onClose={handleChange}
        title="Remove Splash Image"
        primaryAction={{
          content: 'Remove',
          onAction: handleRemoveSplash,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleChange,
          },
        ]}
      >
        <Modal.Section>
          <Text variant="headinglg" as="p">
               Are you sure you want to Remove Splash Image?
          </Text>
        </Modal.Section>
      </Modal>
  );
}