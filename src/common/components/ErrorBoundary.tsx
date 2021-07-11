import { Component } from "react";

// import { CardMedia } from "common/components/CardCustom";
// import { isDevelopment } from "shared/utils/env";

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
} from "@material-ui/core";

interface IState {
  error: Error | null;
  errorInfo: any;
}

export default class ErrorBoundary extends Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = { errorInfo: null, error: null };
  }

  componentDidCatch(error: Error | null, errorInfo: any) {
    this.setState({ error, errorInfo });
    console.error(error, errorInfo);
  }

  render() {
    const { error, errorInfo } = this.state;
    const message = (error as any)?.message ?? "No message";
    const stack = (errorInfo as any)?.componentStack ?? "No stacktrace";

    if (error) {
      return (
        <Card>
          <CardMedia image="images/raccoon.jpg" style={{ height: 150 }} />
          <CardHeader>Произошла ошибка</CardHeader>
          <CardContent>
            К сожалению, произошла ошибка, которая не должна происходить. Мы уже
            уведомили разработчиков и постараемся разобраться как можно скорее.
          </CardContent>
          {/* Следующая информаци не должна выводиться для обычных пользователей */}
          <Divider />
          <CardContent>
            <p>
              <strong>{message}</strong>
            </p>
            <pre>{stack}</pre>
          </CardContent>
        </Card>
      );
    }

    return this.props.children;
  }
}
