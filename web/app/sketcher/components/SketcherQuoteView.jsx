import React from 'react';
import {useStreamWithUpdater} from "ui/effects";
import Stack from "ui/components/Stack";
import Label from "ui/components/controls/Label";
import Field from "ui/components/controls/Field";

export function SketcherQuoteView() {

  return <Stack >
    <Field >
      <h3> Materials </h3>
    </Field>
    <Field >
      <Label>Material</Label>
      <select id="material">
        <option value='birch ply' >birch ply</option>
        <option value='stainless steel' >stainless steel</option>
        <option value='aluminium' >aluminium</option>
        <option value='acrylic' >acrylic</option>
      </select>
    </Field>
    <Field >
      <Label>Thickness</Label>
      <select id="thickness">
        <option value='0.8mm'>0.8mm</option>
        <option value='1.2mm'>1.2mm</option>
        <option value='1.6mm'>1.6mm</option>
        <option value='2.0mm'>2.0mm</option>
      </select>
    </Field>
      <Field >
      <h3> Price </h3>
    </Field>
  </Stack>;
}
