import React from 'react';
import Button from '@material-ui/core/Button';

export const ButtonGetDocker: React.FC = (): React.ReactElement => (
  <Button variant='contained' href={`https://docs.docker.com/get-docker/`}>
    Get Docker
  </Button>
);
