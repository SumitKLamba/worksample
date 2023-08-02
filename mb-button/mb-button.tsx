import { Component, h, Listen, Prop, Element, Host } from '@stencil/core';
import { ButtonType, Sizes, SizesType, Types } from './types';
import { IconSizes, IconSizesType } from '../mb-icon/types';

@Component({
  tag: 'mb-button',
  styleUrl: 'mb-button.css',
  shadow: true,
})
export class MbButton {
  @Element() el: HTMLElement;
  @Prop() text: string;
  @Prop() size: SizesType = Sizes.Medium;
  @Prop() type: ButtonType = Types.Primary;
  @Prop() disabled: boolean = false;
  @Prop() shouldtruncate: boolean = false;
  @Prop() formButton: boolean = false;
  @Prop() leadingIcon?:
    | {
        icon: string;
        iconColor?: string;
        pathNumber?: number;
        iconSize?: IconSizesType;
      }
    | string;
  @Prop() trailingIcon?:
    | {
        icon: string;
        iconColor?: string;
        pathNumber?: number;
        iconSize?: IconSizesType;
      }
    | string;
  @Prop() handlebuttonclick: Function = () => {};
  @Prop() buttonAriaLabel: string;
  @Prop() buttonToolTip: string;
  @Prop() buttonID: string;
  @Prop() testId: string;
  @Prop() ssoButton: boolean = false;

  XLargeButtonCommonClasses: string = this.ssoButton
    ? `flex w-full items-center text-center justify-between font-primary text-sm md:text-base text-center rounded-brRadius`
    : `flex w-full items-center text-center justify-between font-primary text-base text-center rounded-brRadius`;
  LargeButtonCommonClasses: string = `flex ${
    this.shouldtruncate ? 'w-full' : null
  } items-center justify-center text-center font-primary text-base rounded-brRadius`;
  MediumButtonCommonClasses: string = `flex ${
    this.shouldtruncate ? 'w-full' : null
  } h-buttonMedium items-center justify-center text-center font-primary text-base rounded-brRadius`;
  SmallButtonCommonClasses: string = `flex ${
    this.shouldtruncate ? 'w-full' : null
  } h-buttonSmall items-center justify-center text-center font-primary text-xs rounded-brRadius`;

  PrimaryButtonCommonClasses: string =
    'bg-primary hover:bg-iris-100 text-textSecondary font-bold';
  SecondaryButtonCommonClasses: string =
    'bg-background border border-borderColor hover:border-primary text-textPrimary font-bold';
  BorderlessButtonCommonClasses: string = 'h-min bg-transparent text-textPrimary';
  DisabledButtonCommonClasses: string =
    'cursor-not-allowed border border-disabledBorderColor text-textDisabled font-bold';

  @Listen('click')
  onClick() {
    if (!this.disabled) this.handlebuttonclick();
  }

  returnButtonClasses() {
    switch (true) {
      case this.size === Sizes.XLarge && this.disabled:
        return `${this.XLargeButtonCommonClasses} h-buttonLarge px-4 ${this.DisabledButtonCommonClasses}`;
      case this.size === Sizes.XLarge && this.type === Types.Primary:
        return `${this.XLargeButtonCommonClasses} h-buttonLarge px-4 ${this.PrimaryButtonCommonClasses}`;
      case this.size === Sizes.XLarge && this.type === Types.Secondary:
        return `${this.XLargeButtonCommonClasses} h-buttonLarge px-4 ${this.SecondaryButtonCommonClasses}`;
      case this.size === Sizes.XLarge && this.type === Types.Auth:
        return `${this.XLargeButtonCommonClasses} h-buttonLarge bg-gray-100 border border-disabledBorderColor text-textPrimary font-bold`;
      case this.size === Sizes.XLarge && this.type === Types.Borderless:
        return `${this.XLargeButtonCommonClasses} ${this.BorderlessButtonCommonClasses}`;
      case this.size === Sizes.Large && this.disabled:
        return `${this.LargeButtonCommonClasses} h-buttonLarge px-large-btn ${this.DisabledButtonCommonClasses}`;
      case this.size === Sizes.Large && this.type === Types.Primary:
        return `${this.LargeButtonCommonClasses} h-buttonLarge px-large-btn ${this.PrimaryButtonCommonClasses}`;
      case this.size === Sizes.Large && this.type === Types.Secondary:
        return `${this.LargeButtonCommonClasses} h-buttonLarge px-large-btn ${this.SecondaryButtonCommonClasses}`;
      case this.size === Sizes.Large && this.type === Types.Borderless:
        return `${this.LargeButtonCommonClasses} ${this.BorderlessButtonCommonClasses}`;
      case this.size === Sizes.Medium && this.disabled:
        return `${this.MediumButtonCommonClasses} h-buttonMedium ${
          this.leadingIcon || this.trailingIcon ? 'px-2' : 'px-7'
        } ${this.DisabledButtonCommonClasses}`;
      case this.size === Sizes.Medium && this.type === Types.Primary:
        return `${this.MediumButtonCommonClasses} h-buttonMedium ${
          this.leadingIcon || this.trailingIcon ? 'px-2' : 'px-7'
        } ${this.PrimaryButtonCommonClasses}`;
      case this.size === Sizes.Medium && this.type === Types.Secondary:
        return `${this.MediumButtonCommonClasses} h-buttonMedium ${
          this.leadingIcon || this.trailingIcon ? 'px-2' : 'px-7'
        } ${this.SecondaryButtonCommonClasses}`;
      case this.size === Sizes.Medium && this.type === Types.Borderless:
        return `${this.MediumButtonCommonClasses} ${this.BorderlessButtonCommonClasses}`;
      case this.size === Sizes.Small && this.disabled:
        return `${this.SmallButtonCommonClasses} h-buttonSmall ${
          this.leadingIcon || this.trailingIcon ? 'px-2' : 'px-4'
        } ${this.DisabledButtonCommonClasses}`;
      case this.size === Sizes.Small && this.type === Types.Primary:
        return `${this.SmallButtonCommonClasses} h-buttonSmall ${
          this.leadingIcon || this.trailingIcon ? 'px-2' : 'px-4'
        } ${this.PrimaryButtonCommonClasses}`;
      case this.size === Sizes.Small && this.type === Types.Secondary:
        return `${this.SmallButtonCommonClasses} h-buttonSmall ${
          this.leadingIcon || this.trailingIcon ? 'px-2' : 'px-4'
        } ${this.SecondaryButtonCommonClasses}`;
      case this.size === Sizes.Small && this.type === Types.Borderless:
        return `${this.SmallButtonCommonClasses} ${this.BorderlessButtonCommonClasses}`;
    }
  }

  returnIconClasses(position: string) {
    if (this.text) {
      switch (true) {
        case position === 'leading' && this.size === Sizes.XLarge:
          return 'ml-4';
        case position === 'trailing' && this.size === Sizes.XLarge:
          return 'mr-4';
        case position === 'leading' && this.size === Sizes.Large:
          return 'mr-2.5';
        case position === 'trailing' && this.size === Sizes.Large:
          return 'ml-2.5';
        case position === 'leading':
          return 'mr-1';
        case position === 'trailing':
          return 'ml-1';
      }
    }
  }

  returnIconSize() {
    if (typeof this.leadingIcon === 'object' && this.leadingIcon.iconSize) {
      return this.leadingIcon.iconSize;
    }
    if (typeof this.trailingIcon === 'object' && this.trailingIcon.iconSize) {
      return this.trailingIcon.iconSize;
    } else {
      switch (this.size) {
        case Sizes.XLarge:
          return 'medium' as IconSizes;
        case Sizes.Large:
          return 'regular' as IconSizes;
        case Sizes.Medium:
          return 'small' as IconSizes;
        case Sizes.Small:
          return 'small' as IconSizes;
      }
    }
  }

  returnIcon(position: string) {
    if (position === 'leading') {
      return (
        <mb-icon
          data-testid={`${this.text}-icon`}
          class={this.returnIconClasses('leading')}
          icon={
            typeof this.leadingIcon === 'object'
              ? this.leadingIcon.icon
              : this.leadingIcon
          }
          color={
            typeof this.leadingIcon === 'object' ? this.leadingIcon.iconColor : null
          }
          size={this.returnIconSize()}
          focusable={false}
          pathnumber={
            typeof this.leadingIcon === 'object'
              ? this.leadingIcon?.pathNumber
              : null
          }
        />
      );
    } else {
      return (
        <mb-icon
          data-testid={`${this.text}-icon`}
          class={this.returnIconClasses('trailing')}
          icon={
            typeof this.trailingIcon === 'object'
              ? this.trailingIcon.icon
              : this.trailingIcon
          }
          color={
            typeof this.trailingIcon === 'object'
              ? this.trailingIcon.iconColor
              : null
          }
          size={this.returnIconSize()}
          focusable={false}
          pathnumber={
            typeof this.trailingIcon === 'object'
              ? this.trailingIcon?.pathNumber
              : null
          }
        />
      );
    }
  }

  render() {
    return (
      <Host class="flex">
        <button
          data-testid={this.testId ? this.testId : this.buttonID}
          id={this.buttonID}
          title={this.buttonToolTip}
          disabled={this.disabled}
          type={this.formButton ? 'submit' : 'button'}
          aria-label={this.buttonAriaLabel ? this.buttonAriaLabel : this.text}
          class={this.returnButtonClasses()}
        >
          {this.leadingIcon ? this.returnIcon('leading') : <span></span>}
          {this.shouldtruncate ? (
            <span class="truncate">{this.text}</span>
          ) : (
            this.text
          )}
          {this.trailingIcon ? this.returnIcon('trailing') : <span></span>}
        </button>
      </Host>
    );
  }
}
