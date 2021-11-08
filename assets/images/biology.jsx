import * as React from "react"
import Svg, { Mask, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={40}
      height={41}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={5}
        y={-0.323}
        width={30}
        height={42}
        fill="#000"
      >
        <Path fill="#fff" d="M5-.323h30v42H5z" />
        <Path d="M15.092.677c-.15 0-.295.036-.438.097L9.088 3.077c-.574.24-.863.907-.632 1.48v.024L9.55 7.262c.237.576.926.849 1.507.606l.583-.242.68 1.746-.121.048c-.222.088-.398.143-.583.243-.186.1-.456.29-.584.606-.127.315-.058.6 0 .8.058.2.13.364.219.582v.024l.146.388-.34.122C7.009 13.827 5.043 18.459 6.68 22.49v.025l1.774 4.195a5.483 5.483 0 00-.972 3.103c0 2.646 1.892 4.868 4.399 5.384v.048c.152.267.316.521.486.776H8.236C6.981 36.021 6 37.097 6 38.349V39.9c0 .427.35.776.778.776h26.444A.778.778 0 0034 39.9v-1.552c0-1.252-.981-2.328-2.236-2.328h-2.188c1.438-.612 2.17-2.246 1.605-3.71a2.97 2.97 0 00-2.65-1.891 2.9 2.9 0 00-1.142.194l-7.656 2.958h-.025c-.297.118-.677.109-1.118-.073-.337-.14-.665-.394-.972-.679a5.47 5.47 0 00.9-3.007c0-.354-.058-.706-.122-1.042l10.062-4.098a.776.776 0 10-.389-1.504.873.873 0 00-.194.049l-9.99 4.098c-.814-1.576-2.351-2.722-4.18-2.959l-1.604-4.05a2.065 2.065 0 011.142-2.69h.024l.39-.17 1.166 2.837c.012.048.027.1.048.145l.778 1.892a.784.784 0 00.414.412l2.236.945a.777.777 0 00.583 0l3.184-1.26a.784.784 0 00.413-.413l.972-2.23a.772.772 0 000-.582l-.753-1.795V17.325l-.024-.024v-.048a.965.965 0 00-.049-.097l-3.597-8.681c-.088-.219-.146-.376-.243-.558-.098-.182-.262-.446-.584-.582-.322-.137-.604-.082-.802-.024-.197.057-.364.13-.583.218l-.146.048-.705-1.746.657-.266c.565-.237.86-.907.631-1.48v-.024L16.162 1.38a1.195 1.195 0 00-1.07-.703zm-.22 1.673l.802 1.93-4.837 2.012-.801-1.93 4.837-2.012zm-.34 4.063l.704 1.77-1.458.607-.705-1.77 1.458-.607zm3.013 2.522c.021.049.024.06.049.121v.025l3.354 8.075-4.934 1.964-3.33-8.027c-.003-.009.003-.015 0-.024-.03-.073-.052-.088-.073-.145.058-.025.067-.043.146-.073h.024L17.4 8.984c.073-.03.088-.028.146-.049zm-5.542 4.535l1.046 2.546-.39.145c-1.844.752-2.74 2.886-1.992 4.729l1.385 3.516a5.473 5.473 0 00-2.43 1.067l-1.507-3.565c-1.316-3.24.255-6.929 3.5-8.269.012-.002.012-.02.024-.024l.365-.145zm9.528 5.14l.365.85-.73 1.648-2.551 1.018-1.653-.703-.34-.848 4.91-1.965zM13 26.006a3.795 3.795 0 013.816 3.807A3.795 3.795 0 0113 33.62a3.795 3.795 0 01-3.816-3.807A3.795 3.795 0 0113 26.006zm15.483 5.965a1.39 1.39 0 011.24.898c.276.715-.086 1.494-.803 1.77L25.3 36.02H14.313a7.247 7.247 0 01-.56-.752 5.5 5.5 0 002.82-1.26c.425.384.905.703 1.434.92.705.292 1.516.383 2.285.074l7.656-2.934c.18-.07.355-.104.535-.098zM8.236 37.573h23.528c.355 0 .68.312.68.776v.776H7.556v-.776c0-.464.325-.776.68-.776z" />
      </Mask>
      <Path
        d="M15.092.677c-.15 0-.295.036-.438.097L9.088 3.077c-.574.24-.863.907-.632 1.48v.024L9.55 7.262c.237.576.926.849 1.507.606l.583-.242.68 1.746-.121.048c-.222.088-.398.143-.583.243-.186.1-.456.29-.584.606-.127.315-.058.6 0 .8.058.2.13.364.219.582v.024l.146.388-.34.122C7.009 13.827 5.043 18.459 6.68 22.49v.025l1.774 4.195a5.483 5.483 0 00-.972 3.103c0 2.646 1.892 4.868 4.399 5.384v.048c.152.267.316.521.486.776H8.236C6.981 36.021 6 37.097 6 38.349V39.9c0 .427.35.776.778.776h26.444A.778.778 0 0034 39.9v-1.552c0-1.252-.981-2.328-2.236-2.328h-2.188c1.438-.612 2.17-2.246 1.605-3.71a2.97 2.97 0 00-2.65-1.891 2.9 2.9 0 00-1.142.194l-7.656 2.958h-.025c-.297.118-.677.109-1.118-.073-.337-.14-.665-.394-.972-.679a5.47 5.47 0 00.9-3.007c0-.354-.058-.706-.122-1.042l10.062-4.098a.776.776 0 10-.389-1.504.873.873 0 00-.194.049l-9.99 4.098c-.814-1.576-2.351-2.722-4.18-2.959l-1.604-4.05a2.065 2.065 0 011.142-2.69h.024l.39-.17 1.166 2.837c.012.048.027.1.048.145l.778 1.892a.784.784 0 00.414.412l2.236.945a.777.777 0 00.583 0l3.184-1.26a.784.784 0 00.413-.413l.972-2.23a.772.772 0 000-.582l-.753-1.795V17.325l-.024-.024v-.048a.965.965 0 00-.049-.097l-3.597-8.681c-.088-.219-.146-.376-.243-.558-.098-.182-.262-.446-.584-.582-.322-.137-.604-.082-.802-.024-.197.057-.364.13-.583.218l-.146.048-.705-1.746.657-.266c.565-.237.86-.907.631-1.48v-.024L16.162 1.38a1.195 1.195 0 00-1.07-.703zm-.22 1.673l.802 1.93-4.837 2.012-.801-1.93 4.837-2.012zm-.34 4.063l.704 1.77-1.458.607-.705-1.77 1.458-.607zm3.013 2.522c.021.049.024.06.049.121v.025l3.354 8.075-4.934 1.964-3.33-8.027c-.003-.009.003-.015 0-.024-.03-.073-.052-.088-.073-.145.058-.025.067-.043.146-.073h.024L17.4 8.984c.073-.03.088-.028.146-.049zm-5.542 4.535l1.046 2.546-.39.145c-1.844.752-2.74 2.886-1.992 4.729l1.385 3.516a5.473 5.473 0 00-2.43 1.067l-1.507-3.565c-1.316-3.24.255-6.929 3.5-8.269.012-.002.012-.02.024-.024l.365-.145zm9.528 5.14l.365.85-.73 1.648-2.551 1.018-1.653-.703-.34-.848 4.91-1.965zM13 26.006a3.795 3.795 0 013.816 3.807A3.795 3.795 0 0113 33.62a3.795 3.795 0 01-3.816-3.807A3.795 3.795 0 0113 26.006zm15.483 5.965a1.39 1.39 0 011.24.898c.276.715-.086 1.494-.803 1.77L25.3 36.02H14.313a7.247 7.247 0 01-.56-.752 5.5 5.5 0 002.82-1.26c.425.384.905.703 1.434.92.705.292 1.516.383 2.285.074l7.656-2.934c.18-.07.355-.104.535-.098zM8.236 37.573h23.528c.355 0 .68.312.68.776v.776H7.556v-.776c0-.464.325-.776.68-.776z"
        fill="#EB2D7C"
      />
      <Path
        d="M15.092.677c-.15 0-.295.036-.438.097L9.088 3.077c-.574.24-.863.907-.632 1.48v.024L9.55 7.262c.237.576.926.849 1.507.606l.583-.242.68 1.746-.121.048c-.222.088-.398.143-.583.243-.186.1-.456.29-.584.606-.127.315-.058.6 0 .8.058.2.13.364.219.582v.024l.146.388-.34.122C7.009 13.827 5.043 18.459 6.68 22.49v.025l1.774 4.195a5.483 5.483 0 00-.972 3.103c0 2.646 1.892 4.868 4.399 5.384v.048c.152.267.316.521.486.776H8.236C6.981 36.021 6 37.097 6 38.349V39.9c0 .427.35.776.778.776h26.444A.778.778 0 0034 39.9v-1.552c0-1.252-.981-2.328-2.236-2.328h-2.188c1.438-.612 2.17-2.246 1.605-3.71a2.97 2.97 0 00-2.65-1.891 2.9 2.9 0 00-1.142.194l-7.656 2.958h-.025c-.297.118-.677.109-1.118-.073-.337-.14-.665-.394-.972-.679a5.47 5.47 0 00.9-3.007c0-.354-.058-.706-.122-1.042l10.062-4.098a.776.776 0 10-.389-1.504.873.873 0 00-.194.049l-9.99 4.098c-.814-1.576-2.351-2.722-4.18-2.959l-1.604-4.05a2.065 2.065 0 011.142-2.69h.024l.39-.17 1.166 2.837c.012.048.027.1.048.145l.778 1.892a.784.784 0 00.414.412l2.236.945a.777.777 0 00.583 0l3.184-1.26a.784.784 0 00.413-.413l.972-2.23a.772.772 0 000-.582l-.753-1.795V17.325l-.024-.024v-.048a.965.965 0 00-.049-.097l-3.597-8.681c-.088-.219-.146-.376-.243-.558-.098-.182-.262-.446-.584-.582-.322-.137-.604-.082-.802-.024-.197.057-.364.13-.583.218l-.146.048-.705-1.746.657-.266c.565-.237.86-.907.631-1.48v-.024L16.162 1.38a1.195 1.195 0 00-1.07-.703zm-.22 1.673l.802 1.93-4.837 2.012-.801-1.93 4.837-2.012zm-.34 4.063l.704 1.77-1.458.607-.705-1.77 1.458-.607zm3.013 2.522c.021.049.024.06.049.121v.025l3.354 8.075-4.934 1.964-3.33-8.027c-.003-.009.003-.015 0-.024-.03-.073-.052-.088-.073-.145.058-.025.067-.043.146-.073h.024L17.4 8.984c.073-.03.088-.028.146-.049zm-5.542 4.535l1.046 2.546-.39.145c-1.844.752-2.74 2.886-1.992 4.729l1.385 3.516a5.473 5.473 0 00-2.43 1.067l-1.507-3.565c-1.316-3.24.255-6.929 3.5-8.269.012-.002.012-.02.024-.024l.365-.145zm9.528 5.14l.365.85-.73 1.648-2.551 1.018-1.653-.703-.34-.848 4.91-1.965zM13 26.006a3.795 3.795 0 013.816 3.807A3.795 3.795 0 0113 33.62a3.795 3.795 0 01-3.816-3.807A3.795 3.795 0 0113 26.006zm15.483 5.965a1.39 1.39 0 011.24.898c.276.715-.086 1.494-.803 1.77L25.3 36.02H14.313a7.247 7.247 0 01-.56-.752 5.5 5.5 0 002.82-1.26c.425.384.905.703 1.434.92.705.292 1.516.383 2.285.074l7.656-2.934c.18-.07.355-.104.535-.098zM8.236 37.573h23.528c.355 0 .68.312.68.776v.776H7.556v-.776c0-.464.325-.776.68-.776z"
        stroke="#EB2D7C"
        strokeWidth={0.4}
        mask="url(#prefix__a)"
      />
    </Svg>
  )
}

export default SvgComponent
