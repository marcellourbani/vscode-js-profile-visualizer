/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import { Protocol as Cdp } from 'devtools-protocol';
import { INode } from '../common/model';
import { IHeapProfileRaw } from './types';

export interface IHeapProfileNode extends INode {
  selfSize: number;
  totalSize: number;
}

export interface ITreeNode extends IHeapProfileNode {
  children: { [id: number]: ITreeNode };
  childrenSize: number;
  parent?: ITreeNode;
}

/**
 * Data model for the profile.
 */
export type IProfileModel = Cdp.HeapProfiler.SamplingHeapProfile;

/**
 * Computes the model for the given profile.
 */
export const buildModel = (profile: IHeapProfileRaw): IProfileModel => {
  return profile;
  // return {
  //   head: profile.head,
  //   rootPath: profile.$vscode?.rootPath,
  // };
};
