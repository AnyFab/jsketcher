import React from 'react';
import NumberControl from "ui/components/controls/NumberControl";
import {useStreamWithUpdater} from "ui/effects";
import RadioButtons, {RadioButton} from "ui/components/controls/RadioButtons";
import Stack from "ui/components/Stack";
import Label from "ui/components/controls/Label";
import Field from "ui/components/controls/Field";

export function SketcherQuoteView() {

  const [dimScale, setDimScale] = useStreamWithUpdater(ctx => ctx.viewer.streams.dimScale);
  const [addingMode, setAddingMode] = useStreamWithUpdater(ctx => ctx.viewer.streams.addingRoleMode);

  return <Stack >
    <Field >
      <h3> Materials </h3>
    </Field>
    <Field >
      <Label>Material</Label>
      <RadioButtons >
        <RadioButton value='birch ply' />
        <RadioButton value='stainless steel' />
        <RadioButton value='aluminium' />
        <RadioButton value='acrylic' />
      </RadioButtons>
    </Field>
    <Field >
      <Label>Thickness</Label>
      <NumberControl min={0.8} baseStep={0.4} round={0.1} />
    </Field>
  </Stack>;
}
