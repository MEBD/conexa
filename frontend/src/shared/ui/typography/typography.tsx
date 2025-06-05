import DynamicTagComponent from '@/shared/helpers/dynamic-tag-component/dynamic-tag-component';
import JoinStyles from '@/shared/helpers/join-styles/join-styles';
import { ReactNode } from 'react';
import styles from './typography.module.css';

const CLASS_NAME = 'typography';

enum VARIANT {
  'h1' = `${CLASS_NAME}__h1`,
  'h2' = `${CLASS_NAME}__h2`,
  'h3' = `${CLASS_NAME}__h3`,
  'h4' = `${CLASS_NAME}__h4`,
  'h5' = `${CLASS_NAME}__h5`,
  'h6' = `${CLASS_NAME}__h6`,
  'subtitle' = `${CLASS_NAME}__subtitle`,
  'subtitle-variant' = `${CLASS_NAME}__subtitle--variant`,
  'body' = `${CLASS_NAME}__body`,
  'body-variant' = `${CLASS_NAME}__body--variant`,
  'caption' = `${CLASS_NAME}__caption`,
  'caption-variant' = `${CLASS_NAME}__caption--variant`,
  'call-to-action-large' = `${CLASS_NAME}__call-to-action-large`,
  'call-to-action-medium' = `${CLASS_NAME}__call-to-action-medium`,
  'call-to-action-small' = `${CLASS_NAME}__call-to-action-small`,
}

const COMPONENT_BY_VARIANT: { [key in keyof typeof VARIANT]: string } = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle: 'h4',
  'subtitle-variant': 'h4',
  body: 'p',
  'body-variant': 'p',
  caption: 'p',
  'caption-variant': 'p',
  'call-to-action-large': 'span',
  'call-to-action-medium': 'span',
  'call-to-action-small': 'span',
};

type COMPONENT =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'a'
  | 'b';

interface Props {
  children: ReactNode;
  variant: keyof typeof VARIANT;
  component?: COMPONENT;
}

const getComponent = (properties: Props) => {
  return properties.component ?? COMPONENT_BY_VARIANT[properties.variant];
};

export default function Typography(properties: Props) {
  const { children, variant } = properties;

  const tag = getComponent(properties);
  const joinedStyles = JoinStyles([
    styles[CLASS_NAME],
    styles[VARIANT[variant]],
  ]);

  return (
    <DynamicTagComponent tag={tag} className={joinedStyles}>
      {children}
    </DynamicTagComponent>
  );
}
