export const ChildrenFlags = {
  UNKNOWN_CHILDREN: 0,
  NO_CHILDREN: 1,
  SINGLE_VNODE: 1 << 1,
  KEYED_VNODES: 1 << 2,
  NONE_KEYED_VNODES: 1 << 3
};
ChildrenFlags.MULTIPLE_VNODES =
  ChildrenFlags.KEYED_VNODES | ChildrenFlags.NONE_KEYED_VNODES;
