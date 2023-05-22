import {Modal, Text} from '@shopify/polaris';
import { useState } from 'react';
export function LogoModal({removeLogo, handleRemoveLogo, RemoveLogoHandler}) {
  return (
      <Modal
        open={removeLogo}
        onClose={handleRemoveLogo}
        title="Remove Logo"
        primaryAction={{
          content: 'Remove',
          onAction: RemoveLogoHandler,        
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleRemoveLogo,
          },
        ]}
      >
        <Modal.Section>
          <Text  variant="headinglg" as="p">
               Are you sure you want to Remove Logo?
          </Text>
        </Modal.Section>
      </Modal>
  );
}