import React from "react";
import { WithWizard } from "react-albus";
import { Button } from "reactstrap";

const BottomNavigation = ({
  className,
  onClickPrev,
  prevLabel,
  onClickNext,
  onClickLast,
  nextLabel,
  lastLabel,
}) => {
  return (
    <WithWizard
      render={({ next, previous, step, steps }) => (
        <div className={`wizard-buttons ${className}`}>
          {steps.indexOf(step) != 0 && (
            <Button
              className={`mr-1`}
              onClick={() => {
                onClickPrev(previous, steps, step);
              }}
            >
              {prevLabel}
            </Button>
          )}
          {steps.indexOf(step) == steps.length - 1 && (
            <Button
              type="submit"
              color="primary"
              className={`mr-1`}
              onClick={() => {
                onClickLast(previous, steps, step);
              }}
            >
              {lastLabel}
            </Button>
          )}
          {steps.indexOf(step) != steps.length - 1 && (
            <Button
              type="submit"
              color="primary"
              className={`mr-1`}
              onClick={() => {
                onClickNext(next, steps, step);
              }}
            >
              {nextLabel}
            </Button>
          )}
        </div>
      )}
    />
  );
};
export default BottomNavigation;
