import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: '' };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container fixed>
          <Typography variant="h2">
            Houve um erro na aplicação
          </Typography>
          <Typography variant="span">
            { this.state.error }
          </Typography>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
