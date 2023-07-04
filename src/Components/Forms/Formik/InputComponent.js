import React from "react";
import { get } from "lodash";
import { Input } from "antd";
import { TextInput, ValidationError, StyledLabel } from "../../UI/Elements";
import { FlexContainer } from "../../UI/Layout";

export const InputComponent = ({
  field,
  form,
  label,
  layout,
  Left,
  isColumn,
  labelWidth,
  isRequired,
  isShadow,
  isDisabled,
  form: { touched, errors, validateOnChange },
  noLabel,
  inlineLabel,
  ...props
}) => {
  if (isColumn) {
    return (
      <>
        {!noLabel && (
          <StyledLabel style={{ flexBasis: labelWidth || "-1%" }}>
            {label}
          </StyledLabel>
        )}
        <TextInput
          layout={"vertical"}
          {...field}
          {...props}
          Left={Left}
          validateOnChange={false}
          isRequired={isRequired}
          isShadow={isShadow}
          isDisabled={isDisabled}
        />

        {get(touched, field.name) && get(errors, field.name) && (
          <ValidationError>{get(errors, field.name)}</ValidationError>
        )}
      </>
    );
  }
  return (
    <>
      <FlexContainer>
        <FlexContainer alignItems="center" flexWrap={inlineLabel && "nowrap"}>
          {!noLabel && (
            <StyledLabel style={{ flexBasis: labelWidth || "-1%" }}>
              {label}
            </StyledLabel>
          )}

          <TextInput
            layout={"vertical"}
            {...field}
            {...props}
            Left={Left}
            isShadow={isShadow}
            validateOnChange={false}
            isRequired={isRequired}
            isDisabled={isDisabled}
          />
        </FlexContainer>
      </FlexContainer>
      {get(touched, field.name) && get(errors, field.name) && (
        <ValidationError >{get(errors, field.name)}</ValidationError>
      )}
    </>
  );
};
export default ({ value, field, label, isRequired, noLabel, inlineLabel, form: { setFieldValue, setFieldTouched, touched, errors }, ...props }) => {
  return <Input {...field} {...props} />
};
