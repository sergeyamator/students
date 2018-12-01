import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { getMentor } from '../../helpers';
import styles from './ProfilePage.scss';

const mapStateToProps = state => ({
  mentor: getMentor(state),
});

@connect(mapStateToProps)
class ProfilePage extends Component {
  static propTypes = {
    mentor: PropTypes.shape({
      username: PropTypes.string,
      email: PropTypes.string,
      avatar: PropTypes.string,
      createdAt: PropTypes.string,
    }).isRequired,
  }

  state = {
    isEditing: false,
  }

  onEditClick = () => {
    this.setState({
      isEditing: true,
    });
  }

  render() {
    const { mentor } = this.props;

    if (!mentor) {
      return <h1>Ooops, something wrong</h1>;
    }

    const {
      username, email, createdAt, avatar,
    } = this.props.mentor;

    const { isEditing } = this.state;

    return (
      <Grid container className={styles.container}>
        {
          isEditing
            ? (
              // EDITING STATE
              <Fragment>
                <Grid item xs={3}>
                  <Card>
                    <CardContent className={styles.avatar}>
                      {
                    avatar
                      ? <img src={avatar} alt={username} />
                      : <span />
                  }
                    </CardContent>


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
              html, css, javascript
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={8}>
      text2
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
                    ? <img src={avatar} alt={username} />
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
              html, css, javascript
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
