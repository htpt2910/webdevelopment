import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  FormGroup,
  FormControlLabel,
  IconButton,
  ImageList,
  ImageListItem,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  TextField,
  Input,
  Toolbar,
  Typography,
  Switch
} from "@mui/material";
import { AccountCircle, Settings, Logout } from "@mui/icons-material";
import NavigationBar from "../navigationBar"
class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.htp = React.createRef();
    this.date = React.createRef();
    this.team = React.createRef();
    this.age = React.createRef();
  }
  state = {
    auth: true,
    anchorEl: null,
    edit: false,
    name: "Obstacle Crossed",
    htp:
      "Players will have the weapons and abilities to overcome obstacles. However, it can only be used once. Weapons can appear indefinitely. Weapons spawn randomly while running.",
    date: "2021-10-30",
    team: "Best Team Name",
    age: "6",
    prevData: [
      "/images/game_play.png",
      "/images/shuriken.png",
      "/images/sword.png",
      "/images/bomb.jpeg"
    ],
    currData: [
      "/images/game_play.png",
      "/images/shuriken.png",
      "/images/sword.png",
      "/images/bomb.jpeg"
    ]
  };

  handleSaveChange = (event) => {
    this.setState({
      edit: false,
      name: this.name.current.value,
      htp: this.htp.current.value,
      team: this.team.current.value,
      date: this.date.current.value,
      age: this.age.current.value,
      prevData: [...this.state.currData]
    });
  };

  changeEditMode = (event) => {
    // có thể bỏ cái switch admin với user đi -> nếu muốn chỉnh sửa -> đăng nhập -> if role là admin thì oke cho sửa 
    
    this.setState({
      edit: !this.state.edit,
      currData: [...this.state.prevData]
    });
  };
  handleChange = (event) => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleInputClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    if (file) var url = reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      this.setState({
        currData: [...this.state.currData, reader.result]
      });
    }.bind(this);
  };

  
  render() {
    return (
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Box sx={{ flexGrow: 1 }}>
          <NavigationBar />
        </Box>
        <Container margin="normal">
          <Typography m variant="h4" style={{ textAlign: "center" }}>
            Game Information
          </Typography>
        </Container>
        <Container>
          <Typography my variant="h6">
            {"Name: "}
            {this.state.edit ? (
              <TextField
                defaultValue={this.state.name}
                variant="standard"
                inputRef={this.name}
              />
            ) : (
              this.state.name
            )}
          </Typography>
          <Typography my variant="h6">
            {"How to play: "}
            {this.state.edit ? (
              <TextField
                fullWidth
                multiline
                defaultValue={this.state.htp}
                inputRef={this.htp}
              />
            ) : (
              <Typography paragram>{this.state.htp}</Typography>
            )}
          </Typography>

          <Typography variant="h6">
            {"Pictures:"}
            {this.state.edit && (
              <label htmlFor="contained-button-file">
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  style={{ display: "none" }}
                  type="file"
                  onChange={this.handleInputClick}
                />
                <Button variant="contained" component="span">
                  {"Upload"}
                </Button>
              </label>
            )}
            <ImageList cols={4}>
              {this.state.currData.map((item) => (
                <ImageListItem key={item}>
                  <img src={item} alt={""} />
                </ImageListItem>
              ))}
            </ImageList>
          </Typography>
          <Typography my variant="h6">
            {"Release Date: "}
            {this.state.edit ? (
              <TextField
                type="date"
                defaultValue={this.state.date}
                variant="standard"
                inputRef={this.date}
              />
            ) : (
              this.state.date
            )}
          </Typography>
          <Typography my variant="h6">
            {"The publisher: "}
            {this.state.edit ? (
              <TextField
                fullWidth
                multiline
                defaultValue={this.state.team}
                inputRef={this.team}
              />
            ) : (
              this.state.team
            )}
          </Typography>
          <Typography my variant="h6">
            {"Rating: "}
            {this.state.edit ? (
              <TextField
                style={{ width: 35 }}
                type="number"
                defaultValue={this.state.age}
                variant="standard"
                inputRef={this.age}
              />
            ) : (
              this.state.age
            )}
            +
          </Typography>
        </Container>
      </Paper>
    );
  }
}

export default AboutUs;
