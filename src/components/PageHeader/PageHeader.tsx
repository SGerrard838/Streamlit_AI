import { Tag } from '@carbon/react';
import React, { LegacyRef, Suspense, forwardRef } from 'react';
import { Calendar, Time } from '@carbon/react/icons';
import { useTranslation } from 'react-i18next';
import ContentWrapper from '@components/ContentWrapper';
import * as styles from './PageHeader.module.scss';

interface PageHeaderProps {
  children: React.ReactNode;
  timeToComplete?: number;
  updated?: string;
}

// eslint-disable-next-line react/display-name
const PageHeader = forwardRef<Element, PageHeaderProps>(
  ({ children, timeToComplete, updated }, ref) => {
    const { t } = useTranslation();
    return (
      <div className={styles.pageHeader} ref={ref as LegacyRef<HTMLDivElement>}>
        <ContentWrapper className={styles.contentWrapper}>
          <div className={styles.metadata}>
            {timeToComplete && (
              <Tag size='md' type='high-contrast' renderIcon={Time} className={styles.timeTag}>
                {timeToComplete} min
              </Tag>
            )}
            {updated && (
              <Tag size='md' type='high-contrast' renderIcon={Calendar} className={styles.timeTag}>
                <Suspense>{t('contentHeaderUpdated', { date: updated })}</Suspense>
              </Tag>
            )}
          </div>
          <h1 id='page-header'>{children}</h1>
        </ContentWrapper>
      </div>
    );
  }
);

export default PageHeader;
