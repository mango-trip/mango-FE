import { CSSProp } from 'styled-components';

export type PropsWithStyles<TProps = unknown> = TProps & StyleProps;

export type StyleProps = {
  styles?: CSSProp;
};
