import React from "react";
import { SteamText } from "react-steam-components";

type SteamRadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  id?: string;
};
function CustomSteamRadio({
  checked,
  label,
  id,
  disabled,
  ...restProps
}: SteamRadioProps) {
  return (
    <>
      <input
        type="radio"
        id={id}
        checked={checked}
        className="hidden"
        disabled={disabled}
        {...restProps}
      />
      <label htmlFor={id} className="flex gap-3">
        <div className="w-4 h-4 bg-transparent rounded-full border border-madderBlue flex place-content-center place-items-center">
          <div
            className={`w-2 h-2 bg-steamGold rounded-full ${
              checked ? "bg-steamGold" : "bg-transparent"
            }`}
          />
        </div>
        <SteamText variant={disabled ? "olive" : "default"}>{label}</SteamText>
      </label>
    </>
  );
}

export default CustomSteamRadio;
