import { XControlValueAccessor, XCorner, XFormOption, XWithConfig } from '@ng-nest/ui/core';
import { Component, Input } from '@angular/core';

/**
 * ColorPicker
 * @selector x-color-picker
 * @decorator component
 */
export const XColorPickerPrefix = 'x-color-picker';

const X_CONFIG_NAME = 'colorPicker';

/**
 * ColorPicker Property
 */
@Component({ template: '' })
export class XColorPickerProperty extends XControlValueAccessor<string> implements XColorPickerOption {
  /**
   * 展示方位
   */
  @Input() @XWithConfig<XCorner>(X_CONFIG_NAME, 'bottom-start') placement: XCorner;
}

/**
 * ColorPicker Option
 * @undocument true
 */
export interface XColorPickerOption extends XFormOption {
  /**
   * 展示方位
   */
  placement?: XCorner;
}

/**
 * 颜色种类
 */
export type XColorType = 'hex' | 'rgba' | 'hsla';

/**
 * ColorPicker-Portal
 * @selector x-color-picker-portal
 * @decorator component
 */
export const XColorPickerPortalPrefix = 'x-color-picker-portal';
