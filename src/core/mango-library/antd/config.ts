import { Color } from '@mango-library/color';
import { GlobalToken } from 'antd';
import { ComponentStyleConfig } from 'antd/es/config-provider/context';
import {
  AliasToken,
  ColorMapToken,
  ComponentTokenMap,
  MappingAlgorithm,
  OverrideToken,
} from 'antd/es/theme/interface';

const Token: Partial<AliasToken> = {
  colorPrimary: Color.primary,
  colorPrimaryBg: Color.primary,
  colorPrimaryText: Color.white,
  colorText: Color.gray[300],
  colorBgContainer: Color.white,

  borderRadius: 20,
};

const Components: {
  [key in keyof OverrideToken]?: OverrideToken[key] & {
    algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[];
  };
} = {
  Button: {
    fontSize: 12,
  },
  Input: {
    colorBorder: Color.primary,
    lineWidth: 1,
    paddingInline: 15,
    paddingBlock: 8,
    activeShadow: Color.white,
    addonBg: Color.white,
  },
};
export const AntdConfig = {
  Token,
  Components,
};
