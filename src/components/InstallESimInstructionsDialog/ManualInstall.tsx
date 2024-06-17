import { clsx } from "@/utils";
import { RoundedLabel } from "./RoundedLabel";
import { TypographyVariants, getTypographyClass } from "../Typography";
import Image from "next/image";

type InfoRowProps = {
  children: React.ReactNode;
  className?: string;
};

const InfoRow = ({ children, className }: InfoRowProps) => {
  return (
    <div className={clsx("flex items-center gap-3", className ?? "")}>
      {children}
    </div>
  );
};

export function ManualInstall() {
  return (
    <div
      className={clsx(
        getTypographyClass(TypographyVariants.Body2),
        "flex flex-col justify-center self-stretch text-center px-4 py-8 mx-auto w-full rounded-2xl bg-slate-50 max-w-[480px]"
      )}
    >
      <RoundedLabel>1</RoundedLabel>
      <div>
        <InfoRow>
          <span>Go to</span>
          <span><Image src="/icons/settings.png" alt="settings icon" width={40} height={40} /> Settings</span>
        </InfoRow>
      </div>
      <div className="flex flex-col flex-wrap justify-center content-center items-center px-3 mt-5 text-center">
        <div className="flex gap-3 items-center text-base font-medium leading-5 text-slate-950">
          <div className="self-stretch my-auto">Go to</div>
          <div className="flex gap-2 justify-center self-stretch whitespace-nowrap">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/624217ac5020fc47a362db3406d3b02dcbed5363dde598443a3a66f3f8e31fa5?apiKey=4d29b65bc77c4658ad8f90690919294c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/624217ac5020fc47a362db3406d3b02dcbed5363dde598443a3a66f3f8e31fa5?apiKey=4d29b65bc77c4658ad8f90690919294c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/624217ac5020fc47a362db3406d3b02dcbed5363dde598443a3a66f3f8e31fa5?apiKey=4d29b65bc77c4658ad8f90690919294c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/624217ac5020fc47a362db3406d3b02dcbed5363dde598443a3a66f3f8e31fa5?apiKey=4d29b65bc77c4658ad8f90690919294c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/624217ac5020fc47a362db3406d3b02dcbed5363dde598443a3a66f3f8e31fa5?apiKey=4d29b65bc77c4658ad8f90690919294c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/624217ac5020fc47a362db3406d3b02dcbed5363dde598443a3a66f3f8e31fa5?apiKey=4d29b65bc77c4658ad8f90690919294c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/624217ac5020fc47a362db3406d3b02dcbed5363dde598443a3a66f3f8e31fa5?apiKey=4d29b65bc77c4658ad8f90690919294c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/624217ac5020fc47a362db3406d3b02dcbed5363dde598443a3a66f3f8e31fa5?apiKey=4d29b65bc77c4658ad8f90690919294c&"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="my-auto">Settings</div>
          </div>
          <div className="self-stretch my-auto">→</div>
        </div>
        <div className="flex gap-3 items-center self-stretch mt-2.5">
          <div className="flex gap-2 justify-center self-stretch">
            <div className="justify-center items-center px-1 w-6 h-6 text-sm leading-4 text-white whitespace-nowrap bg-green-500 rounded-md font-[510]">
              􀖀
            </div>
            <div className="my-auto text-base font-medium leading-5 text-slate-950">
              Mobile Service
            </div>
          </div>
          <div className="self-stretch my-auto text-base font-medium leading-5 text-slate-950">
            →
          </div>
          <div className="self-stretch my-auto text-base font-medium leading-5 text-slate-950">
            Add eSIM
          </div>
          <div className="self-stretch my-auto text-base font-medium leading-5 text-slate-950">
            →
          </div>
        </div>
        <div className="flex gap-3 mt-2.5 text-base font-medium leading-5 text-slate-950">
          <div className="flex gap-2 justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a57fbf36c5269d33015b51fffea9c7ebc523bccff3c0cb50555201a9010ed193?apiKey=4d29b65bc77c4658ad8f90690919294c&"
              className="shrink-0 aspect-square fill-sky-500 w-[22px]"
            />
            <div>Use QR Code</div>
          </div>
          <div>→</div>
        </div>
        <div className="mt-2.5 text-base font-medium leading-5 text-slate-950">
          Enter Details Manually
        </div>
      </div>
      <div className="justify-center items-center self-center px-3.5 mt-8 w-10 h-10 text-xl font-medium leading-7 text-white whitespace-nowrap bg-sky-500 rounded-3xl">
        2
      </div>
      <div className="self-center mt-4 text-base font-medium leading-5 text-center text-slate-950">
        Enter the following data
      </div>
      <div className="flex flex-col justify-center items-center px-14 py-4 mt-4 w-full text-base font-medium leading-5 bg-white rounded-xl text-slate-950">
        <div className="text-center">SM-DP+ Address</div>
        <div className="self-stretch mt-2 text-center">
          LPA:1$consumer.rsp.global
        </div>
        <div className="flex gap-2 justify-center px-6 py-2.5 mt-4 text-sm leading-5 whitespace-nowrap bg-white border-2 border-solid border-slate-200 rounded-[80px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f233a4675e29692435d548ac7779bd083a10d2bd547a9f7e95df28f5a5ee9223?apiKey=4d29b65bc77c4658ad8f90690919294c&"
            className="shrink-0 self-start w-5 aspect-square"
          />
          <div>Copy</div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-4 mt-4 w-full text-base font-medium leading-5 bg-white rounded-xl text-slate-950">
        <div className="text-center">Activation Code</div>
        <div className="mt-2 text-center">$TN202307101635430B87FF83</div>
        <div className="flex gap-2 justify-center self-center px-6 py-2.5 mt-4 text-sm leading-5 whitespace-nowrap bg-white border-2 border-solid border-slate-200 rounded-[80px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f233a4675e29692435d548ac7779bd083a10d2bd547a9f7e95df28f5a5ee9223?apiKey=4d29b65bc77c4658ad8f90690919294c&"
            className="shrink-0 self-start w-5 aspect-square"
          />
          <div>Copy</div>
        </div>
      </div>
      <div className="justify-center items-center self-center px-3.5 mt-8 w-10 h-10 text-xl font-medium leading-7 text-white whitespace-nowrap bg-sky-500 rounded-3xl">
        4
      </div>
      <div className="mt-4 text-base font-medium leading-5 text-center text-slate-950">
        Follow screen instructions to install eSIM
      </div>
      <div className="justify-center items-center self-center px-3.5 mt-8 w-10 h-10 text-xl font-medium leading-7 text-white whitespace-nowrap bg-sky-500 rounded-3xl">
        5
      </div>
      <div className="flex flex-col flex-wrap justify-center content-center px-12 mt-4">
        <div className="flex gap-3 items-center self-center text-base font-medium leading-5 text-center text-slate-950">
          <div className="self-stretch my-auto">Go to</div>
          <div className="flex gap-2 justify-center self-stretch whitespace-nowrap">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/658d105f4c9247dc3cdb561103f6f0d94c264c0b7f46aeb2c70af64cd5c17733?apiKey=4d29b65bc77c4658ad8f90690919294c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/658d105f4c9247dc3cdb561103f6f0d94c264c0b7f46aeb2c70af64cd5c17733?apiKey=4d29b65bc77c4658ad8f90690919294c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/658d105f4c9247dc3cdb561103f6f0d94c264c0b7f46aeb2c70af64cd5c17733?apiKey=4d29b65bc77c4658ad8f90690919294c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/658d105f4c9247dc3cdb561103f6f0d94c264c0b7f46aeb2c70af64cd5c17733?apiKey=4d29b65bc77c4658ad8f90690919294c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/658d105f4c9247dc3cdb561103f6f0d94c264c0b7f46aeb2c70af64cd5c17733?apiKey=4d29b65bc77c4658ad8f90690919294c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/658d105f4c9247dc3cdb561103f6f0d94c264c0b7f46aeb2c70af64cd5c17733?apiKey=4d29b65bc77c4658ad8f90690919294c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/658d105f4c9247dc3cdb561103f6f0d94c264c0b7f46aeb2c70af64cd5c17733?apiKey=4d29b65bc77c4658ad8f90690919294c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/658d105f4c9247dc3cdb561103f6f0d94c264c0b7f46aeb2c70af64cd5c17733?apiKey=4d29b65bc77c4658ad8f90690919294c&"
              className="shrink-0 w-6 aspect-square"
            />
            <div className="my-auto">Settings</div>
          </div>
          <div className="self-stretch my-auto">→</div>
        </div>
        <div className="flex gap-3 self-center mt-2.5 text-center">
          <div className="flex gap-2 justify-center">
            <div className="justify-center items-center px-1 w-6 h-6 text-sm leading-4 text-white whitespace-nowrap bg-green-500 rounded-md font-[510]">
              􀖀
            </div>
            <div className="my-auto text-base font-medium leading-5 text-slate-950">
              Mobile Service
            </div>
          </div>
          <div className="my-auto text-base font-medium leading-5 text-slate-950">
            →
          </div>
        </div>
        <div className="flex gap-3 mt-2.5 text-base font-medium leading-5 text-center text-slate-950">
          <div>Select installed eSIM</div>
          <div>→</div>
        </div>
        <div className="flex gap-3 justify-center mt-2.5">
          <div className="text-base font-medium leading-5 text-center text-slate-950">
            Turn on
          </div>
          <div className="flex gap-2 justify-center">
            <div className="flex flex-col justify-center items-start px-3.5 py-0.5 bg-green-500 rounded-[64.516px]">
              <div className="shrink-0 bg-white shadow h-[17px] rounded-[64.516px]" />
            </div>
            <div className="text-base font-medium leading-5 text-slate-950">
              Data Roaming
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
