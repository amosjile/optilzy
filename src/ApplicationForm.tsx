import React from 'react';
import ApplicantForm from './applicant-form/ApplicantForm';
import styles from './ApplicationForm.module.css';

interface Props {}

export const ApplicationForm = (props: Props) => (
    <div className={styles.exampleClass}>
      <ApplicantForm />
    </div>
);
