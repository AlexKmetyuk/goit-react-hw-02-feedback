import Feedback from "./components/feedback/Feedback";
import Section from "./components/section/Section";

function App() {
  return (
    <Section title={"Please leave faadback"}>
      <Feedback good={0} neutral={0} bad={0} />
    </Section>
  );
}

export default App;
