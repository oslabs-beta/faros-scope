import React from 'react';
import '../../css/switchButton.scss';

interface SwitchButtonProps {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const SwitchButton = ({ checked, onChange }: SwitchButtonProps) => {
  return (
    <div className="check-box">
      <input type="checkbox" checked={checked} onChange={onChange} />
    </div>
  );
};

export default SwitchButton;
