import {Modal, Text} from '@shopify/polaris';
export function AppIconModal({active, handleChange, handleRemoveIcon}) {

  return (
      <Modal
        open={active}
        onClose={handleChange}
        title="Remove App Icon"
        primaryAction={{
          content: 'Remove',
          onAction: handleRemoveIcon,
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
               Are you sure you want to Remove App Icon?
          </Text>
        </Modal.Section>
      </Modal>
  );
}