import Button from "./components/Button/Button";
import Card from "./components/Card";
import { PALETTE } from "./shared/theme/constants";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          margin: "1em",
        }}
      >
        <Card
          subtitle="header"
          title="Primary card title"
          content="Contentas"
          color={PALETTE.primary}
          fullwidth
        />
        <Card
          subtitle="header"
          title="secondary card title"
          content="Contentas"
          color={PALETTE.secondary}
        />
        <Card
          subtitle="header"
          title="success card title"
          content="Contentas"
          color={PALETTE.success}
        />
        <Card
          subtitle="header"
          title="danger card title"
          content="Contentas"
          color={PALETTE.danger}
          outline
        />
        <Card
          subtitle="header"
          title="danger card title"
          content="Contentas"
          color={PALETTE.danger}
        />
        <Card
          subtitle="header"
          title="warning card title"
          content="Contentas"
          color={PALETTE.warning}
        />
        <Card
          subtitle="header"
          title="warning card title"
          content="Contentas"
          color={PALETTE.warning}
          outline
        />
        <Card
          subtitle="header"
          title="info card title"
          content="Contentas"
          color={PALETTE.info}
        />
        <Card
          subtitle="header"
          title="dark card title"
          content="Contentas"
          color={PALETTE.dark}
        />
        <Card
          subtitle="header"
          title="light card title"
          content="Contentas"
          color={PALETTE.light}
        />
      </div>
      <div>
        <Button color={PALETTE.primary} title={PALETTE.primary} />
        <Button color={PALETTE.secondary} title={PALETTE.secondary} />
        <Button color={PALETTE.success} title={PALETTE.success} />
        <Button color={PALETTE.danger} title={PALETTE.danger} />
        <Button color={PALETTE.warning} title={PALETTE.warning} />
        <Button color={PALETTE.info} title={PALETTE.info} />
        <Button color={PALETTE.dark} title={PALETTE.dark} />
        <Button color={PALETTE.light} title={PALETTE.light} />
        <br />
        <Button outline color={PALETTE.primary} title={PALETTE.primary} />
        <Button outline color={PALETTE.secondary} title={PALETTE.secondary} />
        <Button outline color={PALETTE.success} title={PALETTE.success} />
        <Button outline color={PALETTE.danger} title={PALETTE.danger} />
        <Button outline color={PALETTE.warning} title={PALETTE.warning} />
        <Button outline color={PALETTE.info} title={PALETTE.info} />
        <Button outline color={PALETTE.dark} title={PALETTE.dark} />
        <Button outline color={PALETTE.light} title={PALETTE.light} />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
