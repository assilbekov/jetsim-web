import { Card, CardStatus } from "@/models/Card";

export const MockCards: Card[] = [
  {
    id: "expires-in-0-hours",
    status: CardStatus.Installed,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UJ-1DISWVF",
    activatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    expiresAt: new Date(Date.now()).toISOString(),
    trafficTotalBytes: 3221225472,
    trafficRemainingBytes: 2221225472,
    package: {
      id: "2158a171-48fc-53eb-8b38-387158c916b6",
      traffic: {
        isUnlimited: true,
      },
    },
    placeID: "albania",
  },
  {
    id: "expires-in-3-hours",
    status: CardStatus.Installed,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UJ-1DISWVF",
    activatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 3).toISOString(),
    trafficTotalBytes: 3221225472,
    trafficRemainingBytes: 2221225472,
    package: {
      id: "2158a171-48fc-53eb-8b38-387158c916b6",
      traffic: {
        isUnlimited: true,
      },
    },
    placeID: "albania",
  },
  {
    id: "invalid-expiration-date",
    status: CardStatus.Installed,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UJ-1DISWVF",
    activatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    expiresAt: "invalid",
    trafficTotalBytes: 3221225472,
    trafficRemainingBytes: -1,
    package: {
      id: "d0d2387b-9061-5f49-bd98-a6778ef0e72d",
      traffic: {
        isUnlimited: false,
      },
    },
    placeID: "turkiye",
  },
  {
    id: "expires-in-5-days",
    status: CardStatus.Installed,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UJ-1DISWVF",
    activatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(),
    trafficTotalBytes: 3221225472,
    trafficRemainingBytes: 2221225472,
    package: {
      id: "d0d2387b-9061-5f49-bd98-a6778ef0e72d",
      traffic: {
        isUnlimited: false,
      },
    },
    placeID: "mongolia",
  },
  {
    id: "ready-to-install",
    status: CardStatus.ReadyToInstall,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(),
    trafficTotalBytes: 37580963840,
    trafficRemainingBytes: 37580963840,
    package: {
      id: "5ae1b16b-7b69-5903-8c4f-75b59a4a80da",
      traffic: {
        isUnlimited: true,
      },
    },
    placeID: "mexico",
  },
  {
    id: "expries-in-5-days-unlimited",
    status: CardStatus.Installed,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(),
    trafficTotalBytes: 37580963840,
    trafficRemainingBytes: 27580963840,
    package: {
      id: "5ae1b16b-7b69-5903-8c4f-75b59a4a80da",
      traffic: {
        isUnlimited: true,
      },
    },
    placeID: "mexico",
  },
  {
    id: "expired-5-days-ago",
    status: CardStatus.Installed,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    expiresAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    trafficTotalBytes: 37580963840,
    trafficRemainingBytes: 37580963840,
    package: {
      id: "860a2144-35c2-5ec6-bcf6-7f491503f881",
      traffic: {
        isUnlimited: true,
      },
    },
    placeID: "united-states",
  },
  {
    id: "low-traffic-5-days-left",
    status: CardStatus.Installed,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(),
    trafficTotalBytes: 37580963840,
    trafficRemainingBytes: 5580963840,
    package: {
      id: "ce1fd811-0cfe-5ba7-9433-2b276806c3e5",
      traffic: {
        isUnlimited: false,
      },
    },
    placeID: "turkiye",
  },
  {
    id: "low-days-left",
    status: CardStatus.Installed,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 0.3).toISOString(),
    trafficTotalBytes: 37580963840,
    trafficRemainingBytes: 15580963840,
    package: {
      id: "ce1fd811-0cfe-5ba7-9433-2b276806c3e5",
      traffic: {
        isUnlimited: false,
      },
    },
    placeID: "turkiye",
  },
  {
    id: "low-traffice-and-days-left",
    status: CardStatus.Installed,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 0.3).toISOString(),
    trafficTotalBytes: 37580963840,
    trafficRemainingBytes: 5580963840,
    package: {
      id: "ce1fd811-0cfe-5ba7-9433-2b276806c3e5",
      traffic: {
        isUnlimited: false,
      },
    },
    placeID: "turkiye",
  },
  {
    id: "expired-5-days-ago-limited",
    status: CardStatus.Expired,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    expiresAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    trafficTotalBytes: 27580963840,
    trafficRemainingBytes: 37580963840,
    package: {
      id: "de0b2cdd-1e58-5f05-b471-34b609538b7d",
      traffic: {
        isUnlimited: false,
      },
    },
    placeID: "albania",
  },
  {
    id: "empty-traffic-limited",
    status: CardStatus.Expired,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 5).toISOString(),
    trafficTotalBytes: 0,
    trafficRemainingBytes: 37580963840,
    package: {
      id: "b59e0699-4090-52ed-85fe-8622f7acc3ef",
      traffic: {
        isUnlimited: false,
      },
    },
    placeID: "united-kingdom",
  },
  {
    id: "empty-traffic-few-days-left",
    status: CardStatus.Expired,
    lpaCode: "LPA:1$smdp.io$K2-1VL1UH-R5BLFY",
    activatedAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 0.3).toISOString(),
    trafficTotalBytes: 0,
    trafficRemainingBytes: 37580963840,
    package: {
      id: "1b572a55-5435-5b24-8675-315eced6537c",
      traffic: {
        isUnlimited: false,
      },
    },
    placeID: "united-arab-emirates",
  },
];
