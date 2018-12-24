import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { editMentor } from '../../actions';
import { getMentor } from '../../selectors';
import styles from './ProfilePage.scss';
import { url } from '../../config';

const mapStateToProps = state => ({
  mentor: getMentor(state),
});

const mapDispatchToProps = dispatch => ({
  saveMentor(data) {
    dispatch(editMentor(data));
  },
});

@connect(mapStateToProps, mapDispatchToProps)
class ProfilePage extends Component {
  static propTypes = {
    mentor: PropTypes.shape({
      username: PropTypes.string,
      email: PropTypes.string,
      technologies: PropTypes.string,
      avatar: PropTypes.string,
      createdAt: PropTypes.string,
    }).isRequired,
    saveMentor: PropTypes.func.isRequired,
  }

  state = {}

  getInitialState = mentor => ({
    username: mentor && mentor.username || '',
    email: mentor && mentor.email || '',
    technologies: mentor && mentor.technologies || '',
  })

  onEditClick = () => {
    this.setState({
      isEditing: true,
    });
  }

  previewFile = (file) => {
    const reader = new FileReader();

    reader.addEventListener('loadend', () => {
      this.uploadPicture.src = reader.result;
    });


    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  }

  handleBackClick = () => {
    this.setState({
      isEditing: false,
      ...this.getInitialState(this.props.mentor),
    });
  }

  handleselectedFile = ({ target }) => {
    const file = target.files[0];

    if (file && file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      this.previewFile(file);
      this.setState({
        selectedFile: file,
      });
    }
  }

  handleSave = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('username', this.state.username);
    formData.append('email', this.state.email);
    formData.append('technologies', this.state.technologies);
    formData.append('avatar', this.state.selectedFile);

    this.props.saveMentor(formData);
    this.setState({
      isEditing: false,
    });
  }

  render() {
    console.log(this.props);
    const { mentor } = this.props;

    if (!mentor) {
      return <h1>Ooops, something wrong</h1>;
    }

    const {
      createdAt,
      avatar,
    } = this.props.mentor;


    const {
      isEditing,
    } = this.state;

    const email = this.state.email || this.props.mentor.email;
    const username = this.state.username || this.props.mentor.username;
    const technologies = this.state.technologies || this.props.mentor.technologies;

    return (
      <Grid container className={styles.container}>
        {
          isEditing
            ? (
              // EDITING STATE
              <Fragment>
                <Grid item xs={5}>
                  <Card>
                    <CardContent className={styles.avatar}>
                      { avatar ? <img src={`${url.avatar}${avatar}`} alt={username} /> : <span /> }
                    </CardContent>
                    <CardContent>
                      <span>name:</span>
                      <span>{ username }</span>
                    </CardContent>
                    <CardContent>
                      <span>email:</span>
                      <span>{email}</span>
                    </CardContent>
                    <CardContent>
                      <span>registered date:</span>
                      <span>{ moment(createdAt).format('Do MMMM YYYY') }</span>
                    </CardContent>
                    <CardContent>
                      <span>technologies:</span>
                      <span>html, css, javascript</span>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={1} />

                {/* FORM */}
                <Grid item xs={6}>
                  <form noValidate autoComplete="off" className={styles.form} onSubmit={this.handleSave}>
                    <div className={styles.formContainer}>
                      <FormControl className={styles.formControl}>
                        <InputLabel htmlFor="component-simple">Username</InputLabel>
                        <Input
                          value={username}
                          name="username"
                          onChange={this.handleChange}
                        />
                      </FormControl>

                      <FormControl className={styles.formControl}>
                        <InputLabel htmlFor="component-simple">Email</InputLabel>
                        <Input
                          value={email}
                          name="email"
                          onChange={this.handleChange}
                        />
                      </FormControl>

                      <FormControl className={styles.formControl}>
                        <InputLabel htmlFor="component-simple">Technologies</InputLabel>
                        <Input
                          name="technologies"
                          value={technologies}
                          onChange={this.handleChange}
                        />
                      </FormControl>
                    </div>
                    <div className={styles.uploadArea}>
                      <label htmlFor="upload-button">
                        <Button variant="contained" color="primary" className={styles.uploadButton}>
                    Ava upload
                          <CloudUploadIcon />
                          <input
                            id="upoload-button"
                            type="file"
                            name=""
                            onChange={this.handleselectedFile}
                            className={styles.uploadInput}
                          />
                        </Button>
                      </label>
                      <img
                        height="200"
                        alt="preview..."
                        className={this.state.selectedFile ? styles.showed : styles.hidden}
                        ref={((picture) => { this.uploadPicture = picture; })}
                      />
                    </div>


                    <div className={styles.buttons}>
                      <Button variant="contained" color="primary" type="submit">
                   Save
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={this.handleBackClick}
                      >
                   Back
                      </Button>
                    </div>
                  </form>
                </Grid>
              </Fragment>
            )
            : (
              // NOT EDITING STATE
              <Grid item xs={12} className={styles.notEdintingWrapper}>
                <Card>
                  <CardContent className={styles.avatar}>
                    {
                  avatar
                    ? <img src={`${url.avatar}${avatar}`} alt={username} />
                    : <span />
                }
                  </CardContent>
                  <Button onClick={this.onEditClick} color="primary" variant="contained">Edit</Button>
                  <CardContent>
              name:
                    { username }
                  </CardContent>

                  <CardContent>
              email:
                    {email}
                  </CardContent>

                  <CardContent>
              registered date:
                    { moment(createdAt).format('Do MMMM YYYY') }
                  </CardContent>


                  <CardContent>
              technologies:
                    {technologies}
                  </CardContent>
                </Card>
              </Grid>
            )
        }
      </Grid>
    );
  }
}
export { ProfilePage };
