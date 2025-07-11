/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { themesDeletev1ThemesSlug } from "../funcs/themesDeletev1ThemesSlug.js";
import { themesGetv1Themes } from "../funcs/themesGetv1Themes.js";
import { themesGetv1ThemesSlug } from "../funcs/themesGetv1ThemesSlug.js";
import { themesPatchv1ThemesSlug } from "../funcs/themesPatchv1ThemesSlug.js";
import { themesPostv1Themes } from "../funcs/themesPostv1Themes.js";
import { themesPutv1ThemesSlug } from "../funcs/themesPutv1ThemesSlug.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Themes extends ClientSDK {
  /**
   * List all themes
   *
   * @remarks
   * Get a list of all themes for the team
   */
  async getv1Themes(
    options?: RequestOptions,
  ): Promise<Array<operations.Getv1ThemesResponseBody>> {
    return unwrapAsync(themesGetv1Themes(
      this,
      options,
    ));
  }

  /**
   * Create a theme
   *
   * @remarks
   * Create a new theme for the team
   */
  async postv1Themes(
    request: operations.Postv1ThemesRequestBody,
    options?: RequestOptions,
  ): Promise<operations.Postv1ThemesResponseBody> {
    return unwrapAsync(themesPostv1Themes(
      this,
      request,
      options,
    ));
  }

  /**
   * Update theme metadata
   *
   * @remarks
   * Update themes metadata
   */
  async patchv1ThemesSlug(
    request: operations.Patchv1ThemesSlugRequest,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(themesPatchv1ThemesSlug(
      this,
      request,
      options,
    ));
  }

  /**
   * Update theme document
   *
   * @remarks
   * Update themes document
   */
  async putv1ThemesSlug(
    request: operations.Putv1ThemesSlugRequest,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(themesPutv1ThemesSlug(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete a theme
   *
   * @remarks
   * Delete a specific themes
   */
  async deletev1ThemesSlug(
    request: operations.Deletev1ThemesSlugRequest,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(themesDeletev1ThemesSlug(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a theme
   *
   * @remarks
   * Get a the themes document
   */
  async getv1ThemesSlug(
    request: operations.Getv1ThemesSlugRequest,
    options?: RequestOptions,
  ): Promise<string> {
    return unwrapAsync(themesGetv1ThemesSlug(
      this,
      request,
      options,
    ));
  }
}
