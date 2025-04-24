import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import About from "@/pages/About";
import Mission from "@/pages/Mission";
import History from "@/pages/History";
import CarnivalService from "@/pages/CarnivalService";
import LimousineService from "@/pages/LimousineService";
import AirportService from "@/pages/AirportService";
import TourService from "@/pages/TourService";
import SharedVanService from "@/pages/SharedVanService";
import News from "@/pages/News";
import NewsDetail from "@/pages/NewsDetail";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gioi-thieu" component={About} />
      <Route path="/su-menh" component={Mission} />
      <Route path="/lich-su" component={History} />
      <Route path="/dich-vu/thue-xe-carnival-co-lai" component={CarnivalService} />
      <Route path="/dich-vu/thue-xe-limousine-co-lai" component={LimousineService} />
      <Route path="/dich-vu/dua-don-san-bay" component={AirportService} />
      <Route path="/dich-vu/tour-tham-quan" component={TourService} />
      <Route path="/dich-vu/xe-ghep" component={SharedVanService} />
      <Route path="/tin-tuc" component={News} />
      <Route path="/tin-tuc/:slug" component={NewsDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
