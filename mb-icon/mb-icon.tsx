import { Component, h, Host, Listen, Prop } from '@stencil/core';
import { IconSizesType, IconSizes } from './types';

enum type {
  Button = 'button',
  Itag = 'iTag',
}

@Component({
  tag: 'mb-icon',
  styleUrl: 'mb-icon.css',
  shadow: true,
})
export class MbIcon {
  @Prop({ reflect: true }) icon!: string;
  @Prop() handleiconclick: Function = () => {};
  @Prop() size: IconSizesType = IconSizes.Small;
  @Prop() focusable: boolean = true;
  @Prop() disabled: boolean = false;
  @Prop({ reflect: true }) color: string = 'icons';
  @Prop({ reflect: true }) pathnumber: number = 0;
  @Prop({ reflect: true }) ariaLabelValue: string;
  @Prop({ reflect: true }) iconRole: string;
  @Prop({ reflect: true }) toolTip: string;
  @Prop({ reflect: true }) ariaCheckedValue: string | null;
  @Prop({ reflect: true }) ariaPressedValue: boolean;
  @Prop({ reflect: true }) ariaExpandedValue: boolean;
  @Prop({ reflect: true }) iconId: string;
  @Prop({ reflect: true }) type: 'button' | 'iTag' = 'button';
  @Prop() testId: string;
  pathArray: Array<any> = [];

  @Listen('click')
  onClick() {
    this.handleiconclick();
  }

  @Listen('keydown')
  onEnter(ev: KeyboardEvent) {
    if (ev.key === 'Enter') {
      this.handleiconclick();
    }
  }

  returnColor() {
    switch (this.color) {
      case 'primary':
        return 'text-primary';
      case 'icons':
        return 'text-icons';
      case 'secondary':
        return 'text-textSecondary';
      case 'textPrimary':
        return 'text-textPrimary';
      case 'warning':
        return 'text-warning';
      case 'error':
        return 'text-error';
      case 'success':
        return 'text-success';
      default:
        return null;
    }
  }

  pathArrayLength() {
    this.pathArray.length = this.pathnumber;
    this.pathArray.fill(1, 0, this.pathArray.length);
  }

  returnClasses() {
    if (this.size === IconSizes.Xxl) {
      return `m-auto text-iconsXxl ${this.returnColor()} ${this.icon} ${
        this.disabled ? 'opacity-30' : ''
      }`;
    } else if (this.size === IconSizes.Xl) {
      return `m-auto text-iconsXl ${this.returnColor()} ${this.icon} ${
        this.disabled ? 'opacity-30' : ''
      }`;
    } else if (this.size === IconSizes.Large) {
      return `m-auto text-iconsLarge ${this.returnColor()} ${this.icon} ${
        this.disabled ? 'opacity-30' : ''
      }`;
    } else if (this.size === IconSizes.Medium) {
      return `m-auto text-iconsMedium ${this.returnColor()} ${this.icon} ${
        this.disabled ? 'opacity-30' : ''
      }`;
    } else if (this.size === IconSizes.Regular) {
      return `m-auto text-iconsRegular ${this.returnColor()} ${this.icon} ${
        this.disabled ? 'opacity-30' : ''
      }`;
    } else if (this.size === IconSizes.Small) {
      return `m-auto text-iconsSmall ${this.returnColor()} ${this.icon} ${
        this.disabled ? 'opacity-30' : ''
      }`;
    } else if (this.size === IconSizes.Mini) {
      return `m-auto text-iconsMini ${this.returnColor()} ${this.icon} ${
        this.disabled ? 'opacity-30' : ''
      }`;
    } else
      return `m-auto text-iconsMicro ${this.returnColor()} ${this.icon} ${
        this.disabled ? 'opacity-30' : ''
      }`;
  }

  render() {
    return (
      <Host class="flex">
        <link
          rel="stylesheet"
          href="https://mbx-cloud-stage.getmagicbox.com/static/icons/style.css"
        />
        {this.focusable ? (
          this.type === type.Button ? (
            <button
              data-testid={this.testId ? this.testId : this.iconId}
              id={this.iconId}
              title={this.toolTip}
              role={this.focusable ? this.iconRole : 'roletype'}
              aria-pressed={this.ariaPressedValue?.toString()}
              aria-expanded={this.ariaExpandedValue?.toString()}
              aria-checked={this.ariaCheckedValue?.toString()}
              aria-hidden={this.focusable ? 'false' : 'true'}
              aria-label={this.ariaLabelValue}
            >
              <i class={this.returnClasses()} style={{ color: this.color }}>
                {this.pathArrayLength()}
                {this.pathArray.map((_item, index) => {
                  return <span class={`path${index + 1}`} />;
                })}
              </i>
            </button>
          ) : (
            <i
              data-testid={this.testId ? this.testId : this.iconId}
              id={this.iconId}
              title={this.toolTip}
              role={this.focusable ? this.iconRole : 'roletype'}
              aria-pressed={this.ariaPressedValue?.toString()}
              aria-expanded={this.ariaExpandedValue?.toString()}
              aria-checked={this.ariaCheckedValue?.toString()}
              aria-hidden={this.focusable ? 'false' : 'true'}
              aria-label={this.ariaLabelValue}
              class={this.returnClasses()}
              style={{ color: this.color }}
              tabIndex={0}
            >
              {this.pathArrayLength()}
              {this.pathArray.map((_item, index) => {
                return <span class={`path${index + 1}`} />;
              })}
            </i>
          )
        ) : (
          <i
            data-testid={this.testId ? this.testId : this.iconId}
            title={this.toolTip}
            aria-label={this.ariaLabelValue}
            class={this.returnClasses()}
            style={{ color: this.color }}
          >
            {this.pathArrayLength()}
            {this.pathArray.map((_item, index) => {
              return <span class={`path${index + 1}`} />;
            })}
          </i>
        )}
      </Host>
    );
  }
}
