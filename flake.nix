# Do not edit this file. It is automatically generated by https://www.oliverdavies.uk/build-configs.
{
  description = "A Nix Flake for oliverdavies-uk";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs = { nixpkgs, ... }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};

      inherit (pkgs) mkShell;
    in {
      devShells.${system}.default =
        mkShell { buildInputs = with pkgs; [ ansible nodePackages.pnpm nodejs php82 php82Packages.composer ]; };

      formatter.${system} = pkgs.nixfmt;
    };
}
