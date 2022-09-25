import {component$} from '@builder.io/qwik';
import type {DocumentHead} from '@builder.io/qwik-city';
import {generateList} from "../../../common/data";
import {Clock} from "~/components/clock";

export default component$(() => {
  return (
    <div>
      <h1>
        Qwik example
      </h1>
        <ul>
            {generateList().map(el => {
                return <li>{el.id}</li>
            })}
        </ul>
        <Clock/>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
};
