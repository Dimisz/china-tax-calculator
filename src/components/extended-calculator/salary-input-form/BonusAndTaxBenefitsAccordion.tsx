import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InputField from './InputField';
import { inputTypes } from '../../../models/input-types';

interface Props {
  month: string;
}
const BonusAndTaxBenefitsAccordion = ({month}:Props) => {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`bonus and tax benefits in ${month}`}
          id={`bonus-and-tax-benefits-in-${month}`}
        >
          <Typography>Bonus and tax benefits in {month}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <InputField month={month} inputType={inputTypes.BONUS} />
          <InputField month={month} inputType={inputTypes.BENEFITS} />
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default BonusAndTaxBenefitsAccordion;