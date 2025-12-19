import React from 'react';
import NavbarAuth from '@site/src/components/NavbarAuth';
import type { Props } from '@theme/NavbarItem';

export default function AuthNavbarItem(props: Props): JSX.Element {
  return (
    <div style={{ padding: '0 8px' }}> {/* Add some padding for better spacing in the navbar */}
      <NavbarAuth />
    </div>
  );
}