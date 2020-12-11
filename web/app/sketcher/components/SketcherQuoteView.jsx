import React, {useContext} from 'react';
import {useStreamWithUpdater} from "ui/effects";
import Stack from "ui/components/Stack";
import Label from "ui/components/controls/Label";
import Field from "ui/components/controls/Field";
import {SketcherAppContext} from "./SketcherAppContext";

export function SketcherQuoteView() {

	const ctx = useContext(SketcherAppContext);

	const [objectsUpdate, setObjectsUpdate] = useStreamWithUpdater(ctx => ctx.viewer.streams.objectsUpdate);

	const validShapes = new Set(['Segment', 'Circle'])

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
      <h3>Summary </h3>
    </Field>
    <Field >
      <p>Length: </p> {Math.round(ctx.viewer.layers[1].objects.filter(o=>validShapes.has(o.TYPE)).reduce((accumulator,o)=>accumulator+o.getLength(),0))}mm
    </Field>
    <Field >
      <h3> Price </h3>
       <p>£{(Math.ceil(ctx.viewer.layers[1].objects.filter(o=>validShapes.has(o.TYPE)).reduce((accumulator,o)=>accumulator+o.getLength(),0)/60)/100+10).toFixed(2)}</p>
    </Field>
  </Stack>;
}
