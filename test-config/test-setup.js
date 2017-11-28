/* eslint import/first: off, no-unused-vars: off */
import raf from "./tempPolyfills"; // not used, but needed in order to avoid console error
import { configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";

configure( { adapter: new ReactSixteenAdapter() } );
