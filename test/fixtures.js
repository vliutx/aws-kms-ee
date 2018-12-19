export const DOMAIN_OBJECT = {
  f1: 'v1', // simple field
  f2: 'v2',
  f3: { // embedded object
    f4: 'v4',
    f5: 'v5',
  },
  f6: [ // collection of objects
    {
      f7: 'v7',
      f8: 'v8',
      f9: {
        f10: 'v10',
        f11: 'v11',
      },
      f12: [ // nth level
        {
          f13: 'v13',
          f14: 'v14',
          f15: {
            f16: 'v16',
            f17: 'v17',
            f1: 'v18',
          },
        },
      ],
    },
  ],
};

export const GEN_DK_RESPONSE = {
  CiphertextBlob: Buffer.from([
    1,
    2,
    3,
    0,
    120,
    57,
    148,
    136,
    20,
    78,
    179,
    1,
    37,
    148,
    132,
    58,
    106,
    201,
    252,
    106,
    149,
    170,
    7,
    19,
    49,
    72,
    254,
    112,
    140,
    63,
    16,
    16,
    56,
    92,
    5,
    249,
    78,
    1,
    190,
    153,
    50,
    69,
    160,
    172,
    244,
    85,
    77,
    45,
    150,
    51,
    80,
    45,
    193,
    176,
    0,
    0,
    0,
    126,
    48,
    124,
    6,
    9,
    42,
    134,
    72,
    134,
    247,
    13,
    1,
    7,
    6,
    160,
    111,
    48,
    109,
    2,
    1,
    0,
    48,
    104,
    6,
    9,
    42,
    134,
    72,
    134,
    247,
    13,
    1,
    7,
    1,
    48,
    30,
    6,
    9,
    96,
    134,
    72,
    1,
    101,
    3,
    4,
    1,
    46,
    48,
    17,
    4,
    12,
    90,
    27,
    143,
    78,
    13,
    222,
    248,
    104,
    231,
    91,
    30,
    171,
    2,
    1,
    16,
    128,
    59,
    17,
    115,
    183,
    44,
    86,
    164,
    49,
    106,
    11,
    47,
    92,
    179,
    241,
    254,
    16,
    30,
    62,
    214,
    157,
    195,
    97,
    179,
    138,
    44,
    81,
    11,
    245,
    19,
    220,
    90,
    88,
    83,
    159,
    63,
    52,
    112,
    188,
    62,
    241,
    93,
    36,
    53,
    80,
    220,
    185,
    10,
    241,
    118,
    6,
    45,
    234,
    48,
    164,
    121,
    66,
    244,
    38,
    170,
    128,
  ]),
  Plaintext: Buffer.from([
    221,
    148,
    121,
    59,
    187,
    215,
    213,
    217,
    105,
    57,
    139,
    162,
    51,
    190,
    31,
    95,
    71,
    255,
    252,
    96,
    225,
    217,
    233,
    11,
    103,
    148,
    94,
    36,
    131,
    0,
    50,
    241,
  ]),
  KeyId: 'arn:aws:kms:us-east-1:123456789012:key/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
};

export const DECRYPT_DK_RESPONSE = {
  KeyId: 'arn:aws:kms:us-east-1:123456789012:key/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  Plaintext: Buffer.from([
    221,
    148,
    121,
    59,
    187,
    215,
    213,
    217,
    105,
    57,
    139,
    162,
    51,
    190,
    31,
    95,
    71,
    255,
    252,
    96,
    225,
    217,
    233,
    11,
    103,
    148,
    94,
    36,
    131,
    0,
    50,
    241,
  ]),
};

export const ENCRYPT_DK_RESPONSE = {
  CiphertextBlob: Buffer.from([
    1,
    2,
    2,
    0,
    120,
    57,
    148,
    136,
    20,
    78,
    179,
    1,
    37,
    148,
    132,
    58,
    106,
    201,
    252,
    106,
    149,
    170,
    7,
    19,
    49,
    72,
    254,
    112,
    140,
    63,
    16,
    16,
    56,
    92,
    5,
    249,
    78,
    1,
    130,
    107,
    186,
    253,
    251,
    126,
    89,
    26,
    229,
    162,
    106,
    19,
    158,
    25,
    34,
    200,
    0,
    0,
    0,
    126,
    48,
    124,
    6,
    9,
    42,
    134,
    72,
    134,
    247,
    13,
    1,
    7,
    6,
    160,
    111,
    48,
    109,
    2,
    1,
    0,
    48,
    104,
    6,
    9,
    42,
    134,
    72,
    134,
    247,
    13,
    1,
    7,
    1,
    48,
    30,
    6,
    9,
    96,
    134,
    72,
    1,
    101,
    3,
    4,
    1,
    46,
    48,
    17,
    4,
    12,
    55,
    158,
    146,
    112,
    251,
    74,
    157,
    68,
    6,
    64,
    128,
    63,
    2,
    1,
    16,
    128,
    59,
    65,
    239,
    103,
    198,
    96,
    135,
    254,
    144,
    63,
    158,
    111,
    220,
    1,
    143,
    115,
    237,
    147,
    224,
    93,
    161,
    195,
    219,
    31,
    48,
    175,
    188,
    219,
    111,
    142,
    202,
    126,
    159,
    204,
    122,
    6,
    42,
    201,
    55,
    108,
    81,
    252,
    204,
    228,
    103,
    231,
    180,
    42,
    218,
    189,
    200,
    49,
    13,
    168,
    108,
    143,
    38,
    91,
    215,
    13,
  ]),
  KeyId: 'arn:aws:kms:us-east-1:123456789012:key/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
};
