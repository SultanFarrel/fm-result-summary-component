import { AppLayout } from "./components/AppLayout";
import { GradientBG } from "./components/GradientBG";
import { Result } from "./components/Result";
import { Description } from "./components/Description";
import { Summary } from "./components/Summary";

function App() {
  return (
    <AppLayout>
      <GradientBG>
        <Result title="Your result" />
        <Description
          title="Great"
          text="You scored higher than 65% of the people who have taken these tests."
        />
      </GradientBG>
      <Summary title="Summary" />
    </AppLayout>
  );
}

export default App;
