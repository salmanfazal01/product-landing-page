import { Typography } from "@material-ui/core";
import {
  MuiThemeProvider,
  responsiveFontSizes,
  withTheme,
} from "@material-ui/core/styles";
import React from "react";

const ResponsiveText = ({
  theme,
  children,
  variant = "body1",
  style = {},
  className,
}) => {
  const muitheme = responsiveFontSizes(theme);

  return (
    <MuiThemeProvider theme={muitheme}>
      <Typography
        variant={variant}
        style={{
          whiteSpace: "pre-line",
          ...style,
        }}
        className={className}>
        {children}
      </Typography>
    </MuiThemeProvider>
  );
};

export default withTheme(ResponsiveText);
