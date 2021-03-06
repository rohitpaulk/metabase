import React from "react";

import FormInputWidget from "./widgets/FormInputWidget";
import FormTextAreaWidget from "./widgets/FormTextAreaWidget";
import FormPasswordWidget from "./widgets/FormPasswordWidget";
import FormColorWidget from "./widgets/FormColorWidget";
import FormSelectWidget from "./widgets/FormSelectWidget";
import FormNumericInputWidget from "./widgets/FormNumericInputWidget";
import FormToggleWidget from "./widgets/FormToggleWidget";
import FormCollectionWidget from "./widgets/FormCollectionWidget";
import FormHiddenWidget from "./widgets/FormHiddenWidget";

const WIDGETS = {
  input: FormInputWidget,
  text: FormTextAreaWidget,
  color: FormColorWidget,
  password: FormPasswordWidget,
  select: FormSelectWidget,
  integer: FormNumericInputWidget,
  boolean: FormToggleWidget,
  collection: FormCollectionWidget,
  hidden: FormHiddenWidget,
};

const FormWidget = ({ type, ...props }) => {
  const Widget =
    (typeof type === "string" ? WIDGETS[type] : type) || FormInputWidget;
  return <Widget {...props} />;
};

export default FormWidget;
