import ForgeUI, { render, Fragment, Macro, Text, Heading } from "@forge/ui";
import AppForm from "./components/AppForm";

const App = () => {
  return (
    <Fragment>
      <Heading>Forge App</Heading>
      <Text>Hello Everyone!</Text>
      <AppForm />
    </Fragment>
  );
};

export const run = render(
  <Macro
    app={<App />}
  />
);
